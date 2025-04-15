import { NextResponse } from 'next/server';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { withSession } from 'supertokens-node/nextjs';
import { ensureSuperTokensInit } from '../../../config/backend';

ensureSuperTokensInit();

interface TeamMember {
    id: string;
    email: string;
    role: 'Admin' | 'Member';
    status: 'Active' | 'Pending';
}

export async function GET(request: Request & { session?: SessionContainer }) {
    try {
        const session = request.session;
        if (!session) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const userId = session.getUserId();
        const userEmail = session.getAccessTokenPayload().email || '';
        const userRole = session.getAccessTokenPayload().role || 'Member';

        // For now, return just the current user's info
        // In a real implementation, you would fetch team members from your database
        const members: TeamMember[] = [{
            id: userId,
            email: userEmail,
            role: userRole as 'Admin' | 'Member',
            status: 'Active'
        }];

        return NextResponse.json(members);
    } catch (error) {
        console.error('Error fetching team members:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

// Wrap the API with SuperTokens session
export const middleware = withSession; 
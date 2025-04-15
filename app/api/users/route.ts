import { NextResponse } from 'next/server';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { withSession } from 'supertokens-node/nextjs';
import { ensureSuperTokensInit } from '../../config/backend';

ensureSuperTokensInit();

interface User {
    id: string;
    email: string;
    role: string;
    status: string;
}

export async function GET(request: Request & { session?: SessionContainer }) {
    try {
        // Get the current session
        const session = request.session;
        if (!session) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const userId = session.getUserId();
        
        // For now, return just the current user's info
        // You would typically fetch this from your database
        const users: User[] = [{
            id: userId,
            email: session.getAccessTokenPayload().email || '',
            role: session.getAccessTokenPayload().role || 'MEMBER',
            status: 'ACTIVE'
        }];

        return NextResponse.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

// Wrap the API with SuperTokens session
export const middleware = withSession;

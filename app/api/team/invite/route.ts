import { NextResponse } from 'next/server';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { withSession } from 'supertokens-node/nextjs';
import { ensureSuperTokensInit } from '../../../config/backend';

ensureSuperTokensInit();

interface InviteRequest {
    email: string;
    role: 'Admin' | 'Member';
}

export async function POST(request: Request & { session?: SessionContainer }) {
    try {
        const session = request.session;
        if (!session) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const userRole = session.getAccessTokenPayload().role || 'Member';
        
        // Only admins can invite new members
        if (userRole !== 'Admin') {
            return new NextResponse('Forbidden', { status: 403 });
        }

        const body: InviteRequest = await request.json();
        const { email, role } = body;

        if (!email || !role) {
            return new NextResponse('Bad Request', { status: 400 });
        }

        // In a real implementation, you would:
        // 1. Validate the email
        // 2. Check if the user already exists
        // 3. Create an invitation record in your database
        // 4. Send an invitation email

        return NextResponse.json({ 
            success: true,
            message: 'Invitation sent successfully'
        });
    } catch (error) {
        console.error('Error sending invitation:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

// Wrap the API with SuperTokens session
export const middleware = withSession; 
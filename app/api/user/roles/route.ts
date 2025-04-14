import { ensureSuperTokensInit } from "@/app/config/backend";
import { NextResponse, NextRequest } from "next/server";
import { withSession } from "supertokens-node/nextjs";
import UserRoles from "supertokens-node/recipe/userroles";

ensureSuperTokensInit();

export function GET(request: NextRequest) {
    return withSession(request, async (err, session) => {
        if (err) {
            console.error("Session error:", err);
            return NextResponse.json({ error: "Session error", details: err.message }, { status: 500 });
        }
        if (!session) {
            return new NextResponse("Authentication required", { status: 401 });
        }

        try {
            const userId = session.getUserId();
            console.log("Fetching roles for user:", userId);
            
            // Get user roles with proper error handling
            let userRoles;
            try {
                userRoles = await UserRoles.getRolesForUser("public", userId);
                console.log("User roles fetched successfully:", userRoles);
            } catch (error: any) {
                console.error("Error fetching user roles:", error);
                return NextResponse.json(
                    { error: "Failed to fetch user roles", details: error?.message || "Unknown error" },
                    { status: 500 }
                );
            }
            
            return NextResponse.json({
                userId,
                roles: userRoles.roles || []
            });
        } catch (error) {
            console.error("Unexpected error in roles API:", error);
            return NextResponse.json(
                { error: "Unexpected error", details: error instanceof Error ? error.message : String(error) },
                { status: 500 }
            );
        }
    });
} 
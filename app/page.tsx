import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSessionForSSR } from "./util";
import { LandingPage } from "./components/landing";

export default async function Home() {
    const cookiesFromReq = await cookies();
    const cookiesArray: Array<{ name: string; value: string }> = Array.from(cookiesFromReq.getAll()).map(
        ({ name, value }) => ({
            name,
            value,
        })
    );
    const { accessTokenPayload, hasToken, error } = await getSessionForSSR(cookiesArray);

    if (error) {
        return <div>Something went wrong while trying to get the session. Error - {error.message}</div>;
    }

    // If user is authenticated, redirect to dashboard
    if (accessTokenPayload !== undefined) {
        return redirect("/dashboard");
    }

    // If user has a token but no session, they need to refresh
    if (hasToken) {
        return redirect("/auth");
    }

    // If user is not authenticated, show landing page
    return <LandingPage />;
}

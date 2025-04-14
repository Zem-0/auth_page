import { HomePage } from "./components/home";
import { LandingPage } from "./components/landing";
import styles from "./page.module.css";
import { cookies } from "next/headers";
import { getSessionForSSR } from "./util";

export default async function Home() {
    const cookiesFromReq = await cookies();
    const cookiesArray = Array.from(cookiesFromReq.getAll()).map(
        ({ name, value }) => ({
            name,
            value,
        })
    );
    const { accessTokenPayload, hasToken, error } = await getSessionForSSR(cookiesArray);

    if (error) {
        return <div>Something went wrong while trying to get the session. Error - {error.message}</div>;
    }

    // If user is not authenticated, show landing page
    if (accessTokenPayload === undefined) {
        return (
            <main className={styles.main}>
                <LandingPage />
            </main>
        );
    }

    // If user is authenticated, show home page
    return (
        <main className={styles.main}>
            <HomePage />
        </main>
    );
}

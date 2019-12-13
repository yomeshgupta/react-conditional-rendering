import React, { Suspense, lazy, useState } from "react";
import { useNetworkStatus } from "react-adaptive-hooks/network";

const LoginBasic = lazy(() =>
    import(/* webpackChunkName: "loginBasic" */ "./LoginBasic")
);
const LoginAdvanced = lazy(() =>
    import(/* webpackChunkName: "loginAdvanced" */ "./LoginAdvanced")
);

function Home({ onClick }) {
    return (
        <section className="home-wrapper">
            <button onClick={() => onClick(state => !state)}>
                Go to Login
            </button>
        </section>
    );
}

function App() {
    const { effectiveConnectionType } = useNetworkStatus();
    const [showLogin, toggleLogin] = useState(false);

    if (!showLogin) return <Home onClick={toggleLogin} />;

    function renderPage() {
        const { search = "" } = window.location;
        const queryParams = search.replace("?", "").split("&");
        const showAdvanced =
            queryParams.some(query => query.match(/mode=advance/, "i")) ||
            effectiveConnectionType === "4g";

        if (showAdvanced) return <LoginAdvanced />;

        return <LoginBasic />;
    }

    return <Suspense fallback={<div>Loading...</div>}>{renderPage()}</Suspense>;
}

export default App;

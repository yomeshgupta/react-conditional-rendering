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
        switch (effectiveConnectionType) {
            case "4g":
                return <LoginAdvanced />;
            default:
                return <LoginBasic />;
        }
    }

    return <Suspense fallback={<div>Loading...</div>}>{renderPage()}</Suspense>;
}

export default App;

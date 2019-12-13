import React, { useState } from "react";

import "../styles/advanced.scss";

function LoginAdvanced() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-advanced-wrapper">
            <section id="left">
                <div className="content">
                    <h1>Advanced login UI</h1>
                    <p>
                        Powered by{" "}
                        <a
                            href="https://devtools.tech/?ref=conditional-ui-demo"
                            title="Devtools Link"
                            target="_blank"
                        >
                            devtools.tech
                        </a>{" "}
                        | Photo Source :{" "}
                        <a
                            href="https://unsplash.com/photos/qjIJqoO7kvI"
                            title="Background Photo Source Link"
                            target="_blank"
                        >
                            Unsplash
                        </a>
                    </p>
                </div>
            </section>
            <section id="right">
                <form method="POST" action="#">
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input type="submit" value="Login" />
                    <p>Forget Password | Not a user?</p>
                </form>
            </section>
        </div>
    );
}

export default LoginAdvanced;

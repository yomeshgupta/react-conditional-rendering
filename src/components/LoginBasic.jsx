import React, { useState } from "react";

import "../styles/basic.scss";

function LoginBasic() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-basic-wrapper">
            <form method="POST">
                <input
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
                <h1>Basic login UI</h1>
            </form>
        </div>
    );
}

export default LoginBasic;

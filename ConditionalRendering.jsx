const { useState, useEffect } = require("react");

function ConditionalRendering({ isLoggedIn }) {
    const [isLogIn, setIsLogIn] = useState(false);

    setIsLogIn(isLoggedIn);

    return (<div>
        {isLogIn ? <h1>您已登入。</h1> : <h1>請先登入！</h1>}
    </div>)
}

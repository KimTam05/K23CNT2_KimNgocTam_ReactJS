import React from "react";


function Welcome(props) {
    return (
        <div>
            <h1>Hello, {props.name || "Guest"}</h1>
        </div>
    );
}

export default Welcome;
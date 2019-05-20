import React from "react";
import ReactDOM from "react-dom";

export default function SearchFile() {
    return <div>Hello world</div>;
}

if (document.querySelector("#tool-shopify-wrap")) {
    ReactDOM.render(
        <SearchFile />,
        document.querySelector("#tool-shopify-wrap")
    );
}

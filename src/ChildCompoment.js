import React from "react";
import GrandChild from "./GrandChildComponent";

function ChildComponent(props) {
    return(
        <div>
            <p>Data from Child: <b>{props.data}</b></p>
            <GrandChild data={props.data} />
        </div>
    );
}

export default ChildComponent;
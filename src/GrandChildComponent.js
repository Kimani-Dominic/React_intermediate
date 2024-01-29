import React from "react";

function GrandChild(props) {
    return(
        <div>
            <p>Data fromGrandChild: <b>{props.data}</b></p>
        </div>

    );
}

export default GrandChild;
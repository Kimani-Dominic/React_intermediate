import React from "react";
import ChildComponent from "./ChildCompoment";

function ParentComponent() {
    const data = 'Welcome to the First day of React intermediate course on SkillCaptain';
    return(
        <div>
            <p>Data from parent: <b>{data}</b></p>
            <ChildComponent data={data} />
        </div>
    );  
}

export default ParentComponent;
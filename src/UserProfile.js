import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
    const user = useContext(UserContext);
    return(
        <div>
            <h2>User Profile</h2>
            <p>Name: <b>{user.name}</b></p>
            <p>Email: <b>{user.email}</b></p>
        </div>

    );
}

export default UserProfile;
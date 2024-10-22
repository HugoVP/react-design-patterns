import React from "react";
import includeUser from "./components/includeUser";
import UserInfo from "./components/UserInfo";

const UserInfoWithLoader = includeUser(UserInfo, 2);

function App() {
    return (
        <UserInfoWithLoader />
    );
}

export default App;

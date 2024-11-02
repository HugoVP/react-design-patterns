import React, { ReactElement, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { User } from "./UserInfo";

export interface UserLoaderProps {
    userId: number;
    children: ReactElement<{ user: User | null }> | ReactElement<{ user: User | null }>[];
}

const UserLoader: React.FC<UserLoaderProps> = ({ userId, children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`/api/users/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching the user data:", error);
            }
        })();
    }, [userId]);

    const renderChildren = () => {
        return React.Children.map(children, (child) =>
            React.isValidElement(child) ? React.cloneElement(child, { user }) : child)
    };

    return (
        <>{renderChildren()}</>
    );
};

export default UserLoader;

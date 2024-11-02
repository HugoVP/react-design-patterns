import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { User } from "./UserInfo";

export interface CurrentUserLoaderProps {
    children: ReactElement<{ user: User | null }> | ReactElement<{ user: User | null }>[];
}

function CurrentUserLoader({ children }: CurrentUserLoaderProps) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/current-user");
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching the user data:", error);
            }
        })();
    }, []);

    const renderChildren = () => {
        return React.Children.map(children, (child) =>
            React.isValidElement(child) ? React.cloneElement(child, { user }) : child)
    };

    return (
        <>{renderChildren()}</>
    );
}

export default CurrentUserLoader;

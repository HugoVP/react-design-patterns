import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

function includeUpdatableUser(Component, userId) {
    return (props) => {
        const [initialUser, setInitialUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`);
                setInitialUser(response.data);
                setUser(response.data);
            })();
        }, []);

        const handleChangeUser = useCallback((updates) => {
            setUser((prevValue) => ({ ...prevValue, ...updates }));
        }, []);

        const handlePostUser = useCallback(async () => {
            const response = await axios.post(`/users/${userId}`, { user });
            setInitialUser(response.data);
            setUser(response.data);
        }, [user]);

        const handleResetUser = useCallback(() => {
            setUser(initialUser);
        }, [initialUser]);

        return (
            <Component
                {...props}
                user={user}
                onChangeUser={handleChangeUser}
                onPostUser={handlePostUser}
                onResetUser={handleResetUser}
            />
        );
    };
}

export default includeUpdatableUser;

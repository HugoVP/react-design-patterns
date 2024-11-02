import React, { useCallback } from "react";
import includeUpdatableUser from "./includeUpdatableUser";

const UserInfoForm = includeUpdatableUser(
    ({ user, onChangeUser, onPostUser, onResetUser }) => {
        const { name, age } = user || {};

        const handleChangeUserName = useCallback((event) => {
            onChangeUser({ name: event.target.value });
        }, [onChangeUser]);

        const handleChangeUserAge = useCallback((event) => {
            onChangeUser({ age: Number(event.target.value) });
        }, [onChangeUser]);

        return user ? (
            <>
                <label>
                    {"Name:"}
                    <input type="text" value={name} onChange={handleChangeUserName} />
                </label>
                <label>
                    {"Age:"}
                    <input type="number" value={age} onChange={handleChangeUserAge} />
                </label>
                <button onClick={onResetUser}>{"Reset"}</button>
                <button onClick={onPostUser}>{"Save"}</button>
            </>
        ) : (
            <h3>{"Loading..."}</h3>
        );
    }, 3
);

export default UserInfoForm;

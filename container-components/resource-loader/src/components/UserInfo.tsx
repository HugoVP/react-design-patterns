import React from "react";

export interface User {
    id: string;
    name: string;
    age: number;
    country: string;
    books: string[];
}

export interface UserInfoProps {
    user?: User;
}

function UserInfo({ user }: UserInfoProps) {

    const { name, age, country, books } = user || {};

    return user ? (
        <React.Fragment>
            <h2>{name}</h2>
            <p>{`Age: ${age} years old.`}</p>
            <p>{`Country: ${country}`}</p>
            <h2>{"Books:"}</h2>
            <ul>
                {books?.map((book) => (
                    <li key={book}>{book}</li>
                ))}
            </ul>
        </React.Fragment>
    ) : (
        <h1>{"Loading..."}</h1>
    );
}

export default UserInfo;

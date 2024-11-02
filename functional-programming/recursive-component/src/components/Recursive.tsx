import React from "react";
import { NestedObject } from "../App";

const isValidObj = (data: NestedObject | string) => typeof data === "object" && data !== null;

export interface RecursiveProps {
    data: NestedObject;
}

const Recursive: React.FC<NestedObject> = ({ data }) => {
    if (!isValidObj(data)) {
        return <li>{data}</li>;
    }

    const pairs = Object.entries(data);
    console.log(data);
    
    return (
        <>
            {pairs.map(([key, value]) => {
                return (
                    <li>
                        {key}:
                        <ul>
                            <Recursive data={value} />
                        </ul>
                    </li>
                );
            })}
        </>
    );
};

export default Recursive;

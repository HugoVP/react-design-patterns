import React from "react";

function RegularList({ items, sourceName, ItemComponent }) {
    return (
        <>
            {items.map((item, i) => (
                <ItemComponent key={i} {...{ [sourceName]: item }} />
            ))}
        </>
    );
}

export default RegularList;

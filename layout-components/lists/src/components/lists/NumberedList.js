import React from "react";

function NumberedList({ items, sourceName, ItemComponent }) {
    return (
        <>
            {items.map((item, i) => (
                <React.Fragment key={i}>
                    <h3>{i + 1}</h3>
                    <ItemComponent {...{ [sourceName]: item }} />
                </React.Fragment>
            ))}
        </>
    );
}

export default NumberedList;

import React, { useEffect, useState } from "react";

export interface DataSourceProps<T> {
    resourceName: string;
    children: React.ReactNode;
    getData: () => Promise<T | null> | T | null; // Ensure getData is typed as async returning a Promise
}

function DataSource<T>({ resourceName, children, getData = async () => null }: DataSourceProps<T>) {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await getData();
                setData(result);
                console.log(result);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        })();
    }, [getData]);

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // Clone child elements and inject the fetched data
                    return React.cloneElement(child, { [resourceName]: data });
                }
                return child;
            })}
        </>
    );
}

export default DataSource;

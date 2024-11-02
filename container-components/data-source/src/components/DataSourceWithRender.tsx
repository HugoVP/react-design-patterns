import React, { useEffect, useState } from "react";

export interface DataSourceWithRenderProps<T> {
    render: (data: T | null) => React.ReactNode;
    getData: () => Promise<T | null> | T | null; // Ensure getData is typed as async returning a Promise
}

function DataSourceWithRender<T>({ render, getData = async () => null }: DataSourceWithRenderProps<T>) {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await getData();
                setData(result);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        })();
    }, [getData]);

    return render(data);
}

export default DataSourceWithRender;

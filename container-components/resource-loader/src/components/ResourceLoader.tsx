import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export interface ResourceLoaderProps {
    resourceUrl: string;
    resourceName: string;
    children: React.ReactNode
}

const ResouceLoader: React.FC<ResourceLoaderProps> = ({ resourceUrl, resourceName, children }) => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl);
            setResource(response.data);
        })();
    }, [resourceUrl]);

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: resource });
                }
                return child;
            })}
        </>
    );
};

export default ResouceLoader;

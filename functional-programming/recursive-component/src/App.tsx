import Recursive from "./components/Recursive";

export interface NestedObject {
    [key: string]: NestedObject | string;
}

const myNestedObject: NestedObject = {
    key1: "value1",
    key2: {
        innerKey1: "innerValue1",
        innerKey2: {
            innerInnerKey1: "innerInnerValue1",
            innerInnerKey2: "innerInnerValue2",
        },
    },
    key3: "value3",
};

function App() {
    return (
        <Recursive data={myNestedObject} />
    )
}

export default App

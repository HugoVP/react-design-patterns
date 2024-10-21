import logProps from "./components/logProps";
import UserInfo from "./components/UserInfo";


const UserInfoWrapper = logProps(UserInfo);

function App() {
    return (
        <>
            <UserInfoWrapper
                user={{
                    name: "Sarah Waters",
                    age: 55,
                    country: "United Kingdom",
                    books: ["Fingersmith", "The Night Watch"],
                }}
                propA="test1"
                blabla={{ a: 1, age: 23 }}
            />
        </>
    );
}

export default App;

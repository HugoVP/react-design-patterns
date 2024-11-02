import ResouceLoader from "./components/ResourceLoader";
import UserInfo from "./components/UserInfo";
import BookInfo from "./components/BookInfo";

function App() {
    return (
        <>
            <ResouceLoader resourceUrl="/api/users/1" resourceName="user">
                <UserInfo />
            </ResouceLoader>
            <ResouceLoader resourceUrl="/api/books/1" resourceName="book">
                <BookInfo />
            </ResouceLoader>
        </>
    );
}

export default App;

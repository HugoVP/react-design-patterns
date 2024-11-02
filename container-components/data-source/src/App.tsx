import axios from "axios";
import DataSource from "./components/DataSource"
import UserInfo from "./components/UserInfo"
import BookInfo from "./components/BookInfo";
import DataSourceWithRender from "./components/DataSourceWithRender";

const fetchData = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
};

const getDataFromLocalStorage = (key: string) => () => {
    return localStorage.getItem(key);
};

function App() {

    return (
        <>
            <DataSource getData={() => fetchData("/api/users/1")} resourceName={"user"}>
                <UserInfo />
            </DataSource>
            <DataSource getData={() => fetchData("/api/books/1")} resourceName={"book"}>
                <BookInfo />
            </DataSource>

            <DataSource getData={() => getDataFromLocalStorage("test")} resourceName={"book"}>
                <BookInfo />
            </DataSource>

            <DataSourceWithRender
                getData={() => fetchData("/api/users/1")}
                render={(resource) => <UserInfo user={resource} />}
            />
            <DataSourceWithRender
                getData={() => fetchData("/api/books/1")}
                render={(resource) => <BookInfo book={resource} />}
            />

            {/* <DataSourceWithRender
                getData={() => getDataFromLocalStorage("test")}
                render={(resource) => <BookInfo book={resource} />}
            /> */}
        </>
    )
}

export default App

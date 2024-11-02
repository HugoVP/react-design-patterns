import CurrentUserLoader from "./components/CurrentUserLoader"
import UserInfo from "./components/UserInfo"

function App() {
    return (
        <CurrentUserLoader>
            <UserInfo />
        </CurrentUserLoader>
    );
}

export default App

import UserInfo from "./components/UserInfo";
import UserLoader from "./components/UserLoader";

function App() {
  return (
    <>
      <UserLoader userId={1}>
        <UserInfo />
      </UserLoader>

      <UserLoader userId={2}>
        <UserInfo />
      </UserLoader>

      <UserLoader userId={3}>
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;

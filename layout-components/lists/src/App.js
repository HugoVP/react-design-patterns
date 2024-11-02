import LargeAuthorListItem from "./components/authors/LargeAuthorListItem";
import SmallAuthorListItem from "./components/authors/SmallAuthorListItem";
import RegularList from "./components/lists/RegularList";
import { authors } from "./data/authors";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
    </>
  );
}

export default App;
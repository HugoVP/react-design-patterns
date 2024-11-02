import LargeAuthorListItem from "./components/authors/LargeAuthorListItem";
import SmallAuthorListItem from "./components/authors/SmallAuthorListItem";
import LargeBookListItem from "./components/books/LargeBookListItem";
import SmallBookListItem from "./components/books/SmallBookListItem";
import NumberedList from "./components/lists/NumberedList";
import RegularList from "./components/lists/RegularList";
import { authors } from "./data/authors";
import { books } from "./data/books";

function App() {
    return (
        <>
            <RegularList
                items={authors}
                sourceName={"author"}
                ItemComponent={SmallAuthorListItem}
            />
            <NumberedList
                items={authors}
                sourceName={"author"}
                ItemComponent={LargeAuthorListItem}
            />
            <RegularList
                items={books}
                sourceName={"book"}
                ItemComponent={SmallBookListItem}
            />
            <NumberedList
                items={books}
                sourceName={"book"}
                ItemComponent={LargeBookListItem}
            />
        </>
    );
}

export default App;

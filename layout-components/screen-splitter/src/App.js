import SplitScreen from "./components/SplittScreen";

function LeftSideComp() {
  return (
    <h2 style={{ background: "crimson" }}>{"I am left!"}</h2>
  );
}

function RightSideComp() {
  return (
    <h2 style={{ background: "burlywood" }}>{"I am right!"}</h2>
  );
}

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComp />
      <RightSideComp />
    </SplitScreen>
  );
}

export default App;
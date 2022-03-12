import Nav from "./components/Nav"
import List from "./components/List"

import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  function handleCallback(value) {
    setSearch(value);
  }

  return (
    <>
      <Nav onChange={handleCallback} />
      <List filter={search} />
    </>
  );
}

export default App;
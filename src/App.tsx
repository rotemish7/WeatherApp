import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/viewPages/home/Home";

function App() {
  const [searchQuery, setSearchquery] = React.useState<any>(null);

  const handleSearchChanged = (event: any) => {
    setSearchquery(event);
  };

  if(searchQuery) {
    console.log("query", searchQuery.target.value);
  }

  return (
    <div className="App">
      <Header onSearch={handleSearchChanged}></Header>
      <Home></Home>
    </div>
  );
}

export default App;

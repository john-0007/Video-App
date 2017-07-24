import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
const API_KEY="AIzaSyAX9d9kTF9vaPeluSHhLDfddaa5QIXJvzA";

const App= () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector(".container"));

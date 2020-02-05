import React from "react";
import SearchZip from "./components/SearchZip";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="center">
        <h1> Weather Application </h1>
        <SearchZip />
      </div>
    );
  }
}
export default App;

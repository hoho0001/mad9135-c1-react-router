import React from "react";
// import './AppHeader.css';


function AppHeader (props) {
  return (
    <header className="App-header">
      <h1>{props.title}</h1>{" "}
    </header>
  );
}

export default AppHeader
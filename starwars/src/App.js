import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Container from "./containerChar";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log("This is the data", response.data.results);
        setData(response.data.results);
      })
      .catch(error => {
        console.log("we are unable to retrieve data", error);
      });
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container postdata={data} />
    </div>
  );
};

export default App;

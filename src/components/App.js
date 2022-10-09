import React from "react";
import "../styles/App.css";
import { useState, useEffect } from "react";
const App = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async (id = 1) => {
      await fetch(`https://content.newtonschool.co/v1/pr/main/users/${id}`)
        .then((response) => response.json())
        .then((data) => setName(data.name))
        .catch((err) => console.log(err));
    };
    if (id) {
      fetchData(id);
    } else {
      fetchData();
    }
  }, [id]);

  const changeInput = async (e) => {
    setId(e.target.value);
  };
  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={(e) => changeInput(e)} />
      <p id="name">{name}</p>
    </div>
  );
};

export default App;

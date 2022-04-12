import { useState, useEffect } from "react";
import ListItems from "./components/ListItems";
import AddList from "./components/AddList";
import TotalBalance from "./components/TotalBalance";
import IncExpBalance from "./components/IncExpBalance";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const displayLists = async () => {
      const listsFromServer = await fetchLists();
      setList(listsFromServer);
    };
    displayLists();
  }, []);

  const fetchLists = async () => {
    const res = await fetch("http://localhost:8000/lists");
    const data = await res.json();

    return data;
  };

  const deleteList = async (id) => {
    await fetch(`http://localhost:8000/lists/${id}`, {
      method: "DELETE",
    });
    setList(list.filter((item) => item.id !== id));
  };

  const addList = async (newList) => {
    const res = await fetch("http://localhost:8000/lists/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newList),
    });
    const data = await res.json();
    setList([...list, data]);
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="title">Money Management</h2>
        <TotalBalance list={list} />
        <IncExpBalance list={list} />
        <ListItems list={list} deleteList={deleteList} />
        <AddList addList={addList} />
      </div>
    </div>
  );
}

export default App;

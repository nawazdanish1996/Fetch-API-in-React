import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const getUser = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    setData(await resp.json());
  };

  useEffect(() => {
    getUser();
  });

  return (
    <div className="App">
      <h1>Fetch API data</h1>
      {data.map((val) => {
        return (
          <div>
            <p>{val.id}</p>
            <p>{val.title}</p>
            <p style={{ color: "red" }}>{val.body}</p>
          </div>
        );
      })}
    </div>
  );
}

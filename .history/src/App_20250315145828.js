import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/national-elections")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data); // ✅ Debugging in Console
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>National Elections Data</h1>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Candidate</th>
              <th>Party</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.candidate}</td>
                <td>{item.party}</td>
                <td>{item.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;

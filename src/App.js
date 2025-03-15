import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/national-elections")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Debugging
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>National Elections Data</h1>

      {data.length === 0 ? (
        <p>Loading or No Data Available</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>State</th>
              <th>Year</th>
              <th>PC No</th>
              <th>PC Name</th>
              <th>PC Type</th>
              <th>Candidate</th>
              <th>Sex</th>
              <th>Party</th>
              <th>Votes</th>
              <th>Electors</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.state_name}</td>
                <td>{item.year}</td>
                <td>{item.pc_no}</td>
                <td>{item.pc_name}</td>
                <td>{item.pc_type}</td>
                <td>{item.candidate_name}</td>
                <td>{item.candidate_sex}</td>
                <td>{item.party_name} ({item.party_abbreviation})</td>
                <td>{item.total_votes_polled}</td>
                <td>{item.electors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;

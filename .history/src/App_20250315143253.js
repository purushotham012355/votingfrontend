import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [elections, setElections] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/national-elections") // Update this if your API endpoint is different
            .then(response => setElections(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>National Elections Results</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Candidate</th>
                        <th>Party</th>
                        <th>Votes</th>
                    </tr>
                </thead>
                <tbody>
                    {elections.map((election, index) => (
                        <tr key={index}>
                            <td>{election.candidate}</td>
                            <td>{election.party}</td>
                            <td>{election.votes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;

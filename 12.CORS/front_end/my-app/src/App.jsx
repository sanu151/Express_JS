import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:3001/users");
    setUsers(response.data);
  };
  useEffect(() => {
    getData();
  });
  return (
    <>
      <h1>Users</h1>
      {users.map((user) => {
        const { name, email } = user;
        return (
          <div key={email}>
            <h2>{name}</h2>
            <h4>{email}</h4>
          </div>
        );
      })}
    </>
  );
}

export default App;

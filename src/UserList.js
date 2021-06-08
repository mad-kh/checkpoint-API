import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUSer, setListOfUSer] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
        setListOfUSer(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      <h1>List Of Users</h1>
      <ul>
        {listOfUSer.map((user) => (
          <li key={user.id}>
            <a className="username" href={user.username}>
              {user.username}
            </a>
            <a href={user.name}>{user.name}</a>
            <a href={user.email}>{user.email}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;

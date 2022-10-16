import React, { useEffect, useState } from "react";
import {getAllUsers} from '../../services/users-service';

function GetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    setUsers(await getAllUsers());
  }, []);

  useEffect(() => {

  }, []);

  return (
    <div>
      {" "}
      {users.map((val) => {
        console.log(val);
        return <h1> {val.id}</h1>;
      })}
    </div>
  );
}

export default GetUsers;

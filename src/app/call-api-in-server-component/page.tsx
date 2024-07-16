import React from "react";
import Button from "./button";

interface IUser {
  id: any;
  name: string;
  email: any;
}

async function fetchUserData() {
  const API = `https://jsonplaceholder.typicode.com/users`;

  const res = await fetch(API);
  const data = await res.json();
  return data;
}

export default async function page() {
  const userData = await fetchUserData();
  console.log("userData : >> ", userData);

  return (
    <ul>
      {userData.map((user: IUser) => (
        <li key={user.id}>
          {user?.name} <Button email={user.email}></Button>
        </li>
      ))}
    </ul>
  );
}

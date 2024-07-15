import React from "react";

interface IUser {
  id: any;
  name: string;
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
        <li key={user.id}>{user?.name}</li>
      ))}
    </ul>
  );
}
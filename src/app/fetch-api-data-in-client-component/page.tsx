"use client";
import { useEffect, useState } from "react";

interface IUser {
  id: any;
  name: string;
}

export default function page() {
  const [users, setUsers] = useState<IUser[]>([]);

  async function fetchUserData() {
    const API = `https://jsonplaceholder.typicode.com/users`;

    try {
      const res = await fetch(API);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log("users :>> ", users);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user?.name}</li>
      ))}
    </ul>
  );
}

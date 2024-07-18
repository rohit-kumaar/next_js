import React, { Suspense } from "react";
import Loading from "./loading";

interface IUser {
  id: string;
  name: string;
}

const URL = `https://jsonplaceholder.typicode.com/users`;

async function userNameFunction() {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
}

export default async function Page() {
  const users = await userNameFunction();
  console.log(users);

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <h1>Users Name List</h1>
        <ul>
          {users.map((user: IUser) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
}

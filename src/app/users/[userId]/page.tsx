import React from "react";
import getUsers from "../../../../services/getUsers";

export default async function page(props: any) {
  const userList = getUsers();
  const users = await userList;
  const currentId = props.params.userId;
  const userData = users[currentId - 1];
  console.log(props.params.userId);

  return (
    <div>
      <h1>Name : {userData.name}</h1>
      <p>Email : {userData.email}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const userList = getUsers();
  const users = await userList;
  return users.map((user: any) => ({
    userId: user.id.toString(),
  }));
}

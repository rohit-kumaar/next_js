import Link from "next/link";
import getUsers from "../../../services/getUsers";

export default async function Home() {
  const userList = getUsers();
  const users = await userList;
  console.log(users);

  return (
    <main>
      <h1>Users Data</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <span>{user.id}.</span>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

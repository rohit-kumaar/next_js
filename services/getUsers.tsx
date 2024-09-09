const URL = "https://jsonplaceholder.typicode.com/users";

export default async function getUsers() {
  const res = await fetch(URL);
  return res.json();
}

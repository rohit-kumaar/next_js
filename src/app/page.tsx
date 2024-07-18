import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <h1 style={{ fontFamily: '"Roboto", sans-serif' }}>Rohit Kumar</h1>
      <h2 className={roboto.className}>Ricky</h2>
    </main>
  );
}

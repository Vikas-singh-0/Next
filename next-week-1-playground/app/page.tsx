import Counter from "./components/Counter";

export default function Home() {
  return (
    <main style={{ padding: "1rem" }}>
      <h1>Next.js day1 Playground</h1>
      <p>Welcome to the Next.js day1 playground!</p>
      <p>rendered on server by default.</p>
      <Counter />
    </main>
  );
}

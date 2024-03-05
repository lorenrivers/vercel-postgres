import Image from "next/image";

export default function Home() {
  function MyComponent() {
    // the error always throws because we're deliberately causing a problem
    // maybe we didn't get a param and this page will not work without it
    throw new Error("I deliberately broke this page, because I'm a bad person");
    return <div>ERROR</div>;
  }
  return (
    <main>
      <div>
        <h1>This is a test for creating a database using Vercel!</h1>
      </div>
    </main>
  );
}

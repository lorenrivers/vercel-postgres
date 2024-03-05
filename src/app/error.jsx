"use client";
//error boundary files are always client component

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Oh no! Something went wrong on that page! 🙈</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}

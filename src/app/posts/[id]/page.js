import { sql } from "@vercel/postgres";
import { notFound } from "next/navigation";

export default async function PostIdPage({ params }) {
  console.log(params);
  try {
    const post = (await sql`SELECT * FROM posts WHERE id = ${params.id}`)
      .rows[0];
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <div>
      <p>You are on the dynamic route {params.id}</p>
      <p>{post.content}</p>
    </div>
  );
}

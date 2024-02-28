import { sql } from "@vercel/postgres";

export default async function PostIdPage({ params }) {
  console.log(params);
  const post = (await sql`SELECT * FROM posts WHERE id = ${params.id}`).rows[0];
  return (
    <div>
      <p>{params.id}</p>
      <p>{post.content}</p>
    </div>
  );
}

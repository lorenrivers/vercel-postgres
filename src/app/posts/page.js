import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function PostPage() {
  const posts = await sql`SELECT * FROM posts`;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.rows.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Link href="/posts/add-new">Add New Post</Link>
    </div>
  );
}

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import SavePostButton from "@/app/Components/SavePostButton";

export default function AddNewPostPage() {
  async function handleSavePost(formData) {
    "use server";

    const title = formData.get("title");
    const content = formData.get("content");

    await sql`INSERT INTO posts (title, content) VALUES (${title}, ${content})`;

    revalidatePath("/posts"); // revalidate the posts page, so it fetches the new data
    redirect("/posts"); // redirect the user to the posts page
  }
  return (
    <div>
      <h2>Add new post</h2>
      <form action={handleSavePost}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" />
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" />
        {/* <button type="submit">Save</button> */}
        <SavePostButton />
      </form>
    </div>
  );
}

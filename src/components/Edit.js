import { useLoaderData, Form } from "react-router-dom";

export default function Edit(props) {
  const bookmark = useLoaderData()
 
    return (
    <div>
    
      <Form action={`/update/${bookmark._id}`} method="post">
        <input type="input" name="title" placeholder="Website Title" />
        <input type="input" name="url" placeholder="Website URL" />

        <input type="submit" value="Add Bookmark" />
      </Form>
    </div>
  );
}

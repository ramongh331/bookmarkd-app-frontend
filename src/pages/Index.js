import { useLoaderData, Form } from "react-router-dom";
import {ExternalLink} from 'react-external-link'

export default function Index(props) {
  const bookmarks = useLoaderData();

  return (
    <div>
<h2>Add a Bookmark:</h2>
<Form action="/create" method="post">
    <input type="input" name="title" placeholder="Website Title"/>
    <input type="input" name="url" placeholder="Website URL"/>

    <input type="submit" value="Add Bookmark"/>
</Form>

      
      {bookmarks.map((bookmark) => (
        <div>
          <ExternalLink href={bookmark.url} target="_blank">
            <h2>{bookmark.title}</h2>
          </ExternalLink>
          <Form action={`/delete/${book._id}`} method="post">
        <input type="submit" value={`Delete ${cheese.name}`}/>
      </Form>
        </div>
      ))}
    </div>
  );
}
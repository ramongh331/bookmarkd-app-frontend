import { useLoaderData, Form } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import "../index.css";
import { useState } from "react";

export default function Index(props) {
  const bookmarks = useLoaderData();
  const iconStyle = {
    width: "20px",
    height: "20px",
  };

 
  
  const[showForm, setShowForm] = useState(false)




  return (
    <div className="allElements">
      <h2>Add a Bookmark:</h2>
      <Form className="createForm" action="/create" method="post">
        <input type="input" name="title" placeholder="Website Title" />
        <input type="input" name="url" defaultValue="http://" />

        <input type="submit" value="Add Bookmark" />
      </Form>

      {bookmarks.map((bookmark) => (
        <div className="bookmarkEntries">
          <div className="bookmarkEntry">
            <ExternalLink href={bookmark.url} target="_blank">
              <h2>{bookmark.title}</h2>
            </ExternalLink>
            <div className="entryButtons">
              <Form action={`/delete/${bookmark._id}`} method="post">
                <input
                  type="image"
                  src="https://i.imgur.com/ZO4ub9p.png"
                  style={iconStyle}
                  alt="x icon"
                />
              </Form>
              <button className="EditButton"onClick={() => setShowForm(!showForm)}><img src="https://i.imgur.com/YMUERzd.png" alt="edit pencil icon"/></button>
            </div>
          </div>
          {showForm ? 
          <div>
            <Form className="editForm" action={`/update/${bookmark._id}`} method="post">
            <input defaultValue={bookmark.title} type="input" name="title"/>
            <input defaultValue={bookmark.url} type="input" name="url"/>

            <input type="submit" value="Add Change" />
          </Form>
          </div> : null }
          
        </div>
      ))}
    </div>
  );
}

import { useLoaderData, Form } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import "../index.css";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function Index(props) {
  const bookmarks = useLoaderData();
  const iconStyle = {
    width: "20px",
    height: "20px",
  };

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="allElements">
      <h2>Add a Bookmark:</h2>
      <Form className="createForm" action="/create" method="post">
        <TextField
          className="filled-basic"
          label="Website Title"
          variant="filled"
          name="title"
          size="small"
        />
        <TextField
          className="filled-basic"
          label="Website URL"
          defaultValue="http://"
          variant="filled"
          name="url"
          size="small"
        />

        <Button variant="contained" type="submit" size="small">
          Add Bookmark
        </Button>
      </Form>

      {bookmarks.map((bookmark) => (
        <div className="bookmarkEntries">
          <div className="bookmarkEntry">
            <ExternalLink href={bookmark.url} target="_blank">
              <h2>{bookmark.title}</h2>
            </ExternalLink>
            <div className="entryButtons">
              <button
                className="EditButton"
                onClick={() => setShowForm(!showForm)}
              >
                <img
                  src="https://i.imgur.com/YMUERzd.png"
                  alt="edit pencil icon"
                />
              </button>
              <Form action={`/delete/${bookmark._id}`} method="post">
                <input
                  type="image"
                  src="https://i.imgur.com/ZO4ub9p.png"
                  style={iconStyle}
                  alt="x icon"
                />
              </Form>
            </div>
          </div>
          {showForm ? (
            <div>
              <Form
                className="editForm"
                action={`/update/${bookmark._id}`}
                method="post"
              >
                <TextField
                  id="standard-basic"
                  label="Website Title"
                  defaultValue={bookmark.title}
                  variant="standard"
                  name="title"
                  size="small"
                />
                <TextField
                  id="standard-basic"
                  label="Website URL"
                  defaultValue={bookmark.url}
                  variant="standard"
                  name="url"
                  size="small"
                />

                <Button variant="outlined" type="submit" size="small">
                  Add Change
                </Button>
              </Form>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

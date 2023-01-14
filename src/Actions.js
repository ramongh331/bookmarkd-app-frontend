import { redirect } from "react-router-dom";


const URL = "https://bookmarkdbackend.onrender.com";

export const createAction = async ({ request }) => {
  // get the data from the form
  const formData = await request.formData();

  // set up the new Bookmark to match the schema
  const newBookmark = {
    title: formData.get("title"),
    url: formData.get("url"),
  };

  // Send newBookmark to API
  await fetch(URL + "/bookmarks", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBookmark),
  });

  // redirect to index
  return redirect("/");
};

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData();

  const updateBookmark = {
    title: formData.get("title"),
    url: formData.get("url"),
  };

  await fetch(URL + "/bookmarks/" + params.id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateBookmark),
  });
  
  return redirect("/");
};

export const deleteAction = async ({ params }) => {
  // delete bookmark with our api
  await fetch(URL + "/bookmarks/" + params.id, {
    method: "delete",
  });

  // redirect to index
  return redirect("/");
};

const URL = "https://bookmarkdbackend.onrender.com"

export const bookmarksLoader = async () => {
    const response = await fetch(URL + "/bookmarks");
    const bookmarks = await response.json();
    return bookmarks 
}

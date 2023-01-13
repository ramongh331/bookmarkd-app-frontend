const URL = "https://bookmarkdbackend.onrender.com"

export const bookmarksLoader = async () => {
    const response = await fetch(URL + "/bookmarks");
    const bookmarks = await response.json();
    return bookmarks 
}

export const bookmarkLoader = async ({params}) => {
    const response = await fetch(URL + "/bookmarks");
    const bookmarks = await response.json()
    const bookmark = await bookmarks.find(element => element._id === params.id)
    


}
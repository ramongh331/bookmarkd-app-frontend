import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  import App from "./App";
  import Index from "./pages/Index"
  import { bookmarksLoader } from "./Loaders";
  import { createAction, updateAction, deleteAction } from "./Actions";
  
  
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Index/>} loader={bookmarksLoader}/>
        {/* Action Routes */}
        <Route path="create" action={createAction}/>
        <Route path="update/:id" action={updateAction}/>
        <Route path="delete/:id" action={deleteAction}/>
      </Route>
    )
  );
  
  export default Router
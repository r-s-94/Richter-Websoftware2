import Roots from "./roots";
import "./App.scss";
import "./variables.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Imprint from "./component/imprint/imprint";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots />,
    },
    {
      path: "imprint",
      element: <Imprint />,
    },
  ]);

  return (
    <div id="oben" className="app-div">
      <RouterProvider router={router} />
    </div>
  );

  /*
  
  */
}

export default App;

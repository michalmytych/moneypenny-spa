import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import Tester from "./pages/Tester";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "tester", element: <Tester /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

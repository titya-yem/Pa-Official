import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import AboutLayout from "./Layouts/AboutLayout";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutLayout />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

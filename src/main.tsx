import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import ShowFlashcards from "./Pages/ShowFlashcards.tsx";

import Books from "./Pages/Books/Books.tsx";
import Quiz from "./Pages/Quiz/Quiz.tsx";
import Login from "./Components/Login.tsx";
import Signup from "./Components/Signup.tsx";
// import { AppProvider } from "./Context/context";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/flashcards",
    element: <ShowFlashcards />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

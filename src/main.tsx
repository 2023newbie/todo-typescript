// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import UpdateStatusProvider from "./contexts/update-status.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login-page.tsx";
import SignupPage from "./pages/signup-page.tsx";
import HomePage from "./pages/home-page.tsx";
import TodoPage from "./pages/todo-page.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/todo',
        element: <TodoPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/signup',
        element: <SignupPage />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UpdateStatusProvider>
    <RouterProvider router={router} />
  </UpdateStatusProvider>,
);

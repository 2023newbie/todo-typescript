// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import UpdateStatusProvider from "./contexts/update-status.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login-page.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UpdateStatusProvider>
    <RouterProvider router={router} />
  </UpdateStatusProvider>,
);

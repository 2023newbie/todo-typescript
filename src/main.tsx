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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UpdateStatusProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </UpdateStatusProvider>,
);

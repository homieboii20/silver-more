import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "src/Layouts/DashboardLayout";
import MainLayout from "src/Layouts/MainLayout";
import AccountView from "src/Views/Account/AccountView";
import CustomerListView from "src/Views/Customer/CustomerListView";
import DashboardView from "src/Views/Reports/DashboardView";
import LoginView from "src/Views/Auth/LoginView";
import NotFoundView from "src/Views/Errors/NotFoundView";
import ProductListView from "src/Views/Product/ProductListView";
import RegisterView from "src/Views/Auth/RegisterView";
import SettingsView from "src/Views/Settings/SettingsView";

const routes = (isAuthed) => [
  {
    path: "app",
    element: isAuthed ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: "account", element: <AccountView /> },
      { path: "customers", element: <CustomerListView /> },
      { path: "dashboard", element: <DashboardView /> },
      { path: "products", element: <ProductListView /> },
      { path: "settings", element: <SettingsView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "login", element: <LoginView /> },
      { path: "register", element: <RegisterView /> },
      { path: "404", element: <NotFoundView /> },
      { path: "/", element: <Navigate to="/app/dashboard" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;

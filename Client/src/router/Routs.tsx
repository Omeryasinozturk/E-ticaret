import { createBrowserRouter } from "react-router";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import App from "../components/App";
import CatalogPage from "../pages/catalog/CatalogPage";
import ProductDetailsPage from "../pages/catalog/ProductDetail";

export const router = createBrowserRouter( [ 
    {
        path: "/",
        element: <App />,
        children: [
        { path:"", element: <HomePage /> }, 
        { path:"about", element: <AboutPage /> }, 
        { path:"contact", element: <ContactPage /> },
        { path:"catalog", element: <CatalogPage /> },
        { path:"catalog/:id", element: <ProductDetailsPage /> }
        ]
    } 
] );
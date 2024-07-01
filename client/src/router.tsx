import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import Product, { loader as productLoader } from "./views/Product";
import NewProducts, { action as newProductAction } from "./views/NewProducts";
import EditProduct, { action as editProductAction } from "./views/NewProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Product />,
                loader: productLoader
            },
            {
                path: "producto/nuevo",
                element: <NewProducts />,
                action: newProductAction
            },
            {
                path: "producto/:id/edit",
                element: <EditProduct />,
                action: editProductAction
            }
        ]
    }
])
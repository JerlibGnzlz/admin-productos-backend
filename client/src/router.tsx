import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import Product, { loader as productLoader } from "./views/Product";
import NewProducts, { action as newProductAction } from "./views/NewProducts";
import EditProduct, { loader as editarLoader } from "./views/EditProduct";


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
                loader: editarLoader
            }
        ]
    }
])
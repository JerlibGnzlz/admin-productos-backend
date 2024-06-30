import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import Product, { Loader as productLoader } from "./views/Product";
import NewProducts, { Action as newProductAction } from "./views/NewProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Product />,
                loader: productLoader
            }, {
                path: "producto/nuevo",
                element: <NewProducts />,
                action: newProductAction
            }
        ]
    }
])
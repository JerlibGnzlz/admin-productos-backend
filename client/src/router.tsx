import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import Product from "./views/Product";
import NewProducts, { action as newProductAction } from "./views/NewProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Product />
            }, {
                path: "producto/nuevo",
                element: <NewProducts />,
                action: newProductAction
            }
        ]
    }
])
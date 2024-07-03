import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import Product, { loader as productLoader, action as updateActiveAction } from "./views/Product";
import NewProducts, { action as newProductAction } from "./views/NewProducts";
import EditProduct, { loader as editarLoader, action as editarProductAction } from "./views/EditProduct";
import { action as deleteProductDetail } from "./components/ProductDetail";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Product />,
                loader: productLoader,
                action: updateActiveAction
            },
            {
                path: "producto/nuevo",
                element: <NewProducts />,
                action: newProductAction
            },
            {
                path: "producto/:id/edit",
                element: <EditProduct />,
                loader: editarLoader,
                action: editarProductAction
            },
            {
                path: "producto/:id/eliminar",
                action: deleteProductDetail
            }
        ]
    }
])
import { Link } from "react-router-dom"
import { getProducts } from "../services/ProductServices"


export const Loader = async () => {
    await getProducts()


    return {}
}

const Product = () => {
    return (
        <>
            <div className="flex justify-between">
                <h2 className=" text-4xl font-extrabold text-slate-500">Productos</h2>
                <Link
                    className="rounded-md bg-slate-400 p-2 uppercase font-bold hover:bg-slate-500 "
                    to={"/producto/nuevo"}>
                    Agregar Producto
                </Link>
            </div>
        </>
    )
}

export default Product

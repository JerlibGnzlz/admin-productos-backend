import { ActionFunctionArgs, Link, useLoaderData } from 'react-router-dom';
import { getProducts, updateProductActive } from "../services/ProductServices"
import ProductDetail from "../components/ProductDetail"
import { type Product } from "../types"
import request from 'supertest';


export async function loader() {
    const products = await getProducts()
    return products
}


export async function action({ request }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData())
    await updateProductActive(+data.id)
    return {}
}
const Product = () => {

    const products = useLoaderData() as Product[]

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


            <div className="p-2">
                <table className="w-full mt-5 table-auto">
                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-2">Producto</th>
                            <th className="p-2">Precio</th>
                            <th className="p-2">Disponibilidad</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <ProductDetail
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Product

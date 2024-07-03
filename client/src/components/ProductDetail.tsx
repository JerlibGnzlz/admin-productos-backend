import { ActionFunctionArgs, Form, useNavigate, redirect } from "react-router-dom"
import { Product } from "../types"
import { deleteProduct } from "../services/ProductServices"

type Props = {
    product: Product
}
export const action = async ({ params }: ActionFunctionArgs) => {
    await deleteProduct(params.id)
    return redirect("/")
}
const ProductDetail = ({ product }: Props) => {

    const navigate = useNavigate()

    const isActive = product.active

    return (
        <tr className="border-b">
            <td className="p-3  text-center text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3  text-center text-lg text-gray-800">
                $ {product.price}
            </td>
            <td className="p-3 text-lg  text-gray-800">
                <form action="" method="post">
                    <button
                        type="button"
                        name="active"
                        value={product.active.toString()}
                        className={`${isActive ? "text-blue-700" : "text-red-800"} mt-4 p-2 rounded-md uppercase font-bold w-full border border-black`}
                    >
                        {isActive ? "Disponible" : "No Disponible"}
                    </button>
                </form>
            </td>
            <td className="text-md text-gray-800 ">
                <div className="flex items-center">
                    <button
                        className="h-full w-full text-center mt-5  bg-green-400   hover:bg-green-600  p-2  font-bold text-lg cursor-pointer rounded uppercase mr-2"
                        onClick={() => navigate(`producto/${product.id}/edit`)}>
                        Editar
                    </button>


                    <Form
                        className="w-full"
                        method="POST"
                        action={`producto/${product.id}/eliminar`}
                        onSubmit={(e) => {
                            if (!confirm("Desea Eliminar el Producto")) {
                                e.preventDefault()
                            }
                        }}
                    >
                        <input type="submit" value="Eliminar"
                            className="h-full w-full text-center mt-5  bg-red-400   hover:bg-red-500  p-2  font-bold text-lg cursor-pointer rounded uppercase"
                        />

                    </Form>
                </div>
            </td>
        </tr>
    )
}

export default ProductDetail

import { ActionFunctionArgs, Form, useNavigate, redirect } from "react-router-dom"
import { Product } from "../types"

type Props = {
    product: Product
}
export const action = async ({ params }: ActionFunctionArgs) => {
    console.log(params.id)
    return redirect("/")
}
const ProductDetail = ({ product }: Props) => {

    const navigate = useNavigate()

    const isActive = product.active

    return (
        <tr className="border-b">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                $ {product.price}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {isActive ? "Disponible" : "No Disponible"}
            </td>
            <td className="p-3 text-lg text-gray-800 ">
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

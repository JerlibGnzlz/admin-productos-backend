import { useNavigate } from "react-router-dom"
import { Product } from "../types"

type Props = {
    product: Product
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
                    <button
                        className="h-full w-full text-center mt-5  bg-red-400   hover:bg-red-500  p-2  font-bold text-lg cursor-pointer rounded uppercase"
                        onClick={() => navigate(`producto/${product.id}/edit`)}>
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default ProductDetail

import { Link } from "react-router-dom"
import { Product } from "../types"
import EditProduct from "../views/EditProduct"

type Props = {
    product: Product
}

const ProductDetail = ({ product }: Props) => {

    const isActive = product.active

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                $ {product.price}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {isActive ? "Disponible" : "No disponible"}
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex items-center">
                    <button >
                        <Link
                            to={`producto/${id}/edit`}>
                            Editar
                        </Link>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default ProductDetail

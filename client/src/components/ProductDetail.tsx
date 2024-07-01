import { Product } from "../types"

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

            </td>
        </tr>
    )
}

export default ProductDetail

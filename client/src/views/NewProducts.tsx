import { Link } from "react-router-dom"

const NewProducts = () => {
    return (
        <>
            <div className="flex justify-between">
                <h2 className=" text-4xl font-extrabold text-slate-500">Registrar Producto</h2>
                <Link
                    className="rounded-md bg-slate-400 p-2 uppercase font-bold hover:bg-slate-500 "
                    to={"/"}>
                    volver a Producto
                </Link>
            </div>
        </>
    )
}

export default NewProducts

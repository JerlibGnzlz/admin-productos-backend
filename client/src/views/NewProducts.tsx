import { Link, Form, useActionData, redirect, ActionFunctionArgs } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage"
import { addProduct } from "../services/ProductServices"

export async function action({ request }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData())


    let error = ""
    if (Object.values(data).includes("")) {
        error = "Todos los campos son requeridos"
    }
    if (error.length) {
        return error
    }

    await addProduct(data)

    return redirect("/")
}


const NewProducts = () => {

    const error = useActionData() as string


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

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Form
                method="post"
                className="mt-10"
            >

                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="name"
                    >Nombre Producto:</label>
                    <input
                        id="name"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Nombre del Producto"
                        name="name"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="price"
                    >Precio:</label>
                    <input
                        id="price"
                        type="number"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Precio Producto. ej. 200, 300"
                        name="price"
                    />
                </div>
                <input
                    type="submit"
                    className="mt-5 w-full bg-slate-400   hover:bg-slate-500  p-2  font-bold text-lg cursor-pointer rounded"
                    value="Registrar Producto"
                />
            </Form>
        </>
    )
}

export default NewProducts

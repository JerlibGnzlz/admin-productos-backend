


type ProductData = {
    [k: string]: FormDataEntryValue;
}

export const addProduct = (data: ProductData) => {
    console.log("desde producto services", data)
}
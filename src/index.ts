import { server } from "./server";
import colors from 'colors';

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(colors.bgGreen.bold(`Api en el puerto ${port}`))
})
import swaggerJSDoc from 'swagger-jsdoc';


const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.2',
        tags: [
            {
                name: "Products",
                description: 'API de Productos',
            }
        ],
        info: {
            title: 'Administrador de Producto',
            version: '1.0.0',
            description: 'Documentación de mi API',
        },
    },

    apis: ['./src/routes.ts'],

};
export const swaggerSpec = swaggerJSDoc(options);
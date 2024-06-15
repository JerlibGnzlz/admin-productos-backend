import swaggerJSDoc from 'swagger-jsdoc';


const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Administrador de Producto',
            version: '1.0.0',
            description: 'Documentación de mi API',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/routes/*.ts'],

};
export const swaggerSpec = swaggerJSDoc(options);
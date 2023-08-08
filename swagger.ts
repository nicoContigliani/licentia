import { Options } from 'swagger-jsdoc';

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Ejemplo',
      version: '1.0.0',
      description: 'API de ejemplo documentada con Swagger',
    },
  },
  apis: ['./src/routes/*.ts'], // Ruta a tus archivos de rutas donde tienes definidos los endpoints
};

export default options;

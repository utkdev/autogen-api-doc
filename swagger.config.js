const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'Myntra Api',
          description: 'Swagger Api Documentation',
          version: '1.0.0',
          contact: {
              name: 'We Are Groot'
          },
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },
    apis: ['./routes/**.*'],
}

module.exports = {
    swaggerDocs: swaggerJsdoc(options)
};

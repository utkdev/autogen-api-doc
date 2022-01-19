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
                url: 'http://3.110.160.226:3000/'
            },
            {
                url: 'http://ec2-3-110-160-226.ap-south-1.compute.amazonaws.com:3000/'
            }
        ]
    },
    apis: ['./routes/**.*'],
}

module.exports = {
    swaggerDocs: swaggerJsdoc(options)
};

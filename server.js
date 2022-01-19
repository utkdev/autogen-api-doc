const express = require('express');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const { swaggerDocs } = require('./swagger.config');
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

// Middlewares
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { customSiteTitle: 'Myntra Api Docs' }));

app.use('/', usersRouter)
app.use('/', productsRouter)

// Listener
app.listen(port, () => {
    console.log('Listening at port: ', port)
})

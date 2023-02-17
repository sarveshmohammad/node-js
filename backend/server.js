
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const ConnectDB = require('./config/db');
const { execPath } = require('process');
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express();


ConnectDB();

app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/api/users', require('./routers/userrouters'))
app.use('/api/product', require('./routers/productRouter'))
app.listen(port, () => {
    console.log(`app server started on port ${port}`)
})


// const express = require('express');
// const {route} = require('./routers/userrouters');
// const {product} = require('./routers/productRouter');
// const app = express();
// const dotenv = require('dotenv').config();
// const port = process.env.PORT || 5000;
// app.use('/api/users',require('./routers/userrouters'))
// app.use('/api/product',require('./routers/productRouter'))
// const ConnectDB = require('./config/db')
// const { request } = require('express');
// ConnectDB();

// app.use(express.json());
// /*app.use(express.urlencoded({ extended: false}));
// app.use('/api/product',require('./routers/productRouters'))*/




// app.listen(port,()=>{


// })
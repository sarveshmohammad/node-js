const express = require('express');
const { route } = require('./routers/userRoutes');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const multer = require('multer')
const path = require('path')
app.use('/profile', express.static('upload/images'))

const ConnectDB = require('./config/db');
ConnectDB()
app.use(express.urlencoded({ extended: false }));

const errorHandler = require('./Middleware/errorMiddleware')

app.use('/api/user', require('./routers/userRoutes'));
app.use('/api/userAuth', require('./routers/userAuthRoutes'))
app.use('/api/todo', require('./routers/todorouters'))
app.use('/api/subject', require('./routers/studentrouters/subjectrouters'))
app.use('/api/country', require('./routers/studentrouters/countryrouters'))
app.use('/api/course', require('./routers/studentrouters/courserouters'))
app.use('/api/signup', require('./routers/signuprouters'))
app.use('/api/profile', require('./routers/profilerouters'))
app.use('/api/employ', require('./routers/employrouters/employrouters'))
app.use('/api/product', require('./routers/productrouters/productrouters'))
app.use('/api/all', require('./routers/desbordrouters'))
app.use('/api/student', require('./routers/studentrouters/studentrouters'))
app.use('/api/users', require('./routers/usersrouters/usersrouters'))
app.use('/api/products', require('./routers/productsrouters'))
app.use('/api/addtocard', require('./routers/addtocardrouters'))
app.use('/api/wishlish', require('./routers/wishlishrouters'))
app.use('/api/image', require('./routers/imagerouter/imagerouters'));

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})
app.post('/upload', upload.single('profile'), (req, res) => {
    console.log(req.file);
    res.json({
        success: 1,
        profile_url: `http://localhost:8000/profile/${req.file.filename}`
    })
})


app.listen(port, () => {
    console.log(`port is colled ${port}`);
})

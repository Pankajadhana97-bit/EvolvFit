const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();

const {  ConnectDB } = require('./connectDB');
ConnectDB(process.env.DB);

app.use(cors());
app.use(express.json());
app.use('/home',require('./routes/Post')) 

app.listen(process.env.PORT,()=>{
    console.log(`App is listenining on the Port 9000`);
})

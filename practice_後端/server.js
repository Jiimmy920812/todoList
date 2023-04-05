const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const {getSQL} = require("./controller/todo_list")
//解除外網限制
// getSQL()
const cors = require("cors")
const corsOptions = {
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization'],
  }; 
app.use(cors(corsOptions));
app.use(express.json());

//解析 urlencoded 格式
app.use(bodyParser.urlencoded({ extended: true }));


const api = require("./routes/api")
app.use('/api',api)  //自命名


app.listen(port, () => {
    console.log(`local位置: http://127.0.0.1:${port}/`);
});


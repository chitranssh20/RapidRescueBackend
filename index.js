const express = require('express');
const CORS = require('cors')
const app = express();
const neo4j = require('neo4j-driver');
const getAllNodes  = require('./database/dbfunctions/getAllNodes');
const addNewDevice = require('./database/dbfunctions/addNewDevice')

CORS(app)

const driver = neo4j.driver(
    'neo4j://localhost',
    neo4j.auth.basic('neo4j', 'rootneo4j')
  )

const session = driver.session();


require('dotenv').config();


app.use(express.json());

app.get('/' , async(req, res) => {
   const data = await getAllNodes();
   addNewDevice();

    return res.status(200).json({message: "success", data: data })
} )

app.listen(process.env.PORT , () => {
    console.log("Server is running at port : ", process.env.PORT )
} );





const express = require('express')
const cors = require('cors')
const pool = require("./db")
const app = express()

// middleware
app.use(express.json());

// Dummy table for testing
app.get("/api/login",async(req,res) =>{
    pool.connect((err, client, release) => {
        if (err) {
          return console.error('Error acquiring client', err.stack)
        }

      })
})





var port = 5000;

app.use(cors());
app.use(express.json());
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

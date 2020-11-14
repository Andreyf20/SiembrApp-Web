const express = require('express')
const cors = require('cors')
const {pool_users, pool_plants} = require("./db")
const app = express()

// middleware
app.use(express.json());

// Dummy table for testing
app.get("/api/login",async(req,res) =>{
  const correo = req.body.correo;
  const contrasenna = req.body.contrasenna;

  pool_users.connect((err, client, release) => {
    if (err) {
        res.sendStatus(500);
        return console.error('Error acquiring client', err.stack)
    }
    
    client.query(`SELECT correo from users WHERE correo = '${correo}' and contrasenna = '${contrasenna}'`, (err, result) => {
      release()
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack)
      }

      if(result.rowCount > 0) res.status(200).send({'ok': '1'});
      else res.status(200).send({'ok': '0'});
    })
  })
})





var port = 5000;

app.use(cors());
app.use(express.json());
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

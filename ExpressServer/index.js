const express = require('express')
var morgan = require('morgan')
const cors = require('cors')
const {pool_users, pool_plants} = require("./imports/db")
const hash_sp_password = require("./imports/hashing")
const app = express()

// App
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


app.get("/api/login",async(req,res) =>{
  const correo = req.body.correo;
  const contrasenna = hash_sp_password(req.body.contrasenna);


  const query = `select splogin(
    '${correo}' :: varchar,
    '${contrasenna}' :: varchar);`;
  
  pool_users.connect((err, client, release) => {
    if (err) {
      res.sendStatus(500);
      return console.error('Error acquiring client', err.stack)
    }
    
    // TODO: Cambiar eso por el SP cuando se actualice lo del hash del password
    client.query(query, (err, result) => {
      release()
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack)
      }
      
      if(result.rows[0].splogin === true) res.status(200).send({'ok': '1'});
      else res.status(200).send({'ok': '0'});
    })
  })
})

app.post("/api/register_user",async(req,res) =>{
  const user = {
    nombre : req.body.nombre,
    correo : req.body.correo,
    contrasenna : hash_sp_password(req.body.contrasenna),
    trabajaasada : req.body.trabajaasada,
    ubicacion : req.body.ubicacion
  }

  const query = `select spcrearusuario(
    '${user.nombre}' :: varchar,
    '${user.correo}' :: varchar,
    '${user.contrasenna}' :: varchar,
    ${user.trabajaasada} :: boolean,
    '${user.ubicacion}' :: varchar);`;

  pool_users.connect((err, client, release) => {
    if (err) {
      res.sendStatus(500);
      return console.error('Error acquiring client', err.stack)
    }
    
    client.query(query, (err, result) => {
      release()
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack)
      }
      
      if(result.rows[0].spcrearusuario === true) res.status(200).send({'ok': '1'});
      else res.status(200).send({'ok': '0'});
    })
  })
})

var port = 5000;

app.listen(port, () => console.log(`Api listening on port ${port}!`))

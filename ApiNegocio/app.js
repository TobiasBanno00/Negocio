const mysql = require('mysql')
const myconn = require('express-myconnection')
const clientes = require('./routers/clientes')
const express = require('express');

const app=express();
app.use(express.json())



// Indicamos base de datos
const dbOptions = {
    host: 'localhost',
    port: 33065,
    user: 'root',
    password: '',
    database: 'negocio'
}
app.use(myconn(mysql, dbOptions, 'single'))      //primer parametro de myconn modulo de mysql, segundo hash de opciones de modulo mysql, tercero extrategia

// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.status(200).send('Todo ok')
})

app.use('/api/clientes', clientes)

// Arranque de servidor -----------------------------------
const PUERTO =process.env.PORT || 3000;
app.listen(PUERTO, ()=>{
    console.log(`Server activo en puerto: ${PUERTO}`)
})
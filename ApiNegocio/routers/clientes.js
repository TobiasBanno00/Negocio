const express = require('express')
const clientes = express.Router()

//-----------------------------------------GET
clientes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM clientes', (err, resp)=>{
            if(err) return res.send(err)

            res.json(resp)
        })
    })
})

clientes.get('/:id', (req, res)=>{
    const id= req.params.id;

    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query(`SELECT * FROM clientes where id_cliente= ? `, [id],(err, resp)=>{
            if(err) return res.send(err)
            res.json(resp)

        })
    })
})

//-----------------------------------------------------------POST
clientes.post('/', (req, res)=>{

    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO clientes set ?', [req.body], (err, resp)=>{
            if(err) return res.send(err)
            res.send('Cliente agregado')
            
        })
    })
})

//-----------------------------------------------------------DELETE
clientes.delete('/:id', (req, res)=>{
    const id= req.params.id;

    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM clientes WHERE id_cliente = ?', [id],(err, resp)=>{
            if(err) return res.send(err)
            res.send('Cliente eliminado')

        })
    })
})
//-----------------------------------------------------------PUT

clientes.put('/:id', (req, res)=>{


    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE clientes set ? WHERE id_cliente = ?',[req.body, req.params.id],(err, resp)=>{
            if(err) return res.send(err)

            res.send('Cliente modificado')

        })
    })
})


module.exports = clientes
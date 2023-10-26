//const conexion = require('./conexionBD') 
const conexion = require('../../dataB')
const registrarAdopcion = async (req, res) => {
    console.log(req.body);
     // const { usuario, contrasena } = req.query;
    //  console.log(req.body.usuario);
      //console.log(contrasena);
     // const response = await conexion.pool.query('SELECT * FROM control_usuarios.usuario WHERE usuario=$1 AND contrasena = $2', [usuario, contrasena]);
     // res.json(response.rows[0])
     let nombreAdoptante=req.body.nombres;
     let apellidoAdoptante=req.body.apellidos;
     let telefonoAdoptante=req.body.telefono;
     let edadAdoptante=req.body.edad;
     let fechaAdopcion=req.body.fecha;
     let tamanioMascota=req.body.tamanio;
     let tipoMascota=req.body.tipo;
     let sexo=req.body.sexo;
     let comentarios=req.body.comentarios;
     
     const response = await conexion.pool.query('INSERT INTO control_adopciones.adopcion(nombreAdoptante,apellidoAdoptante,telefonoAdoptante,edadAdoptante,fecha,tamanioMascota,tipoMascota,sexo,comentarios) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *', [nombreAdoptante,apellidoAdoptante, telefonoAdoptante, edadAdoptante,fechaAdopcion,tamanioMascota,tipoMascota,sexo,comentarios]);
     


     console.log(response.rows[0])
     res.json(response.rows[0]);
  
    };

    const listarAdopciones = async (req,res) =>{
      const response = await conexion.pool.query('SELECT * FROM control_adopciones.adopcion;'  )
      res.json(response.rows)

    }




    





    module.exports = {
        // insercionUsuario: insercionUsuario,
        // buscarUsuario: buscarUsuario,
         //registrarUsuario:registrarUsuario,
         registrarAdopcion:registrarAdopcion,
         listarAdopciones:listarAdopciones
        // lisatarEmpleados:lisatarEmpleados,
     }
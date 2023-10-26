
//const conexion = require('./conexionBD')

const conexion = require('../../dataB')

const iniciasSersion = async (req, res) => {
  console.log(req.query);
  console.log(req.body);
   // const { usuario, contrasena } = req.query;
    console.log(req.body.usuario);
    let usuario = req.body.usuario;
    let contrasena = req.body.password;
    //console.log(contrasena);
    const response = await conexion.pool.query('SELECT nombre,usuario,apellido,codigo_rol,activo FROM control_usuarios.usuario WHERE usuario=$1 AND contrasena = $2', [usuario, contrasena]);
   // res.json(response.rows[0])
   console.log(response.rows[0])
   res.json(response.rows[0]);

  };


  const registrarUsuario = async (req, res) => {
    console.log(req.body);
     // const { usuario, contrasena } = req.query;
    //  console.log(req.body.usuario);
      //console.log(contrasena);
     // const response = await conexion.pool.query('SELECT * FROM control_usuarios.usuario WHERE usuario=$1 AND contrasena = $2', [usuario, contrasena]);
     // res.json(response.rows[0])
     let nombre=req.body.nombres;
     let usuario=req.body.usuario;
     let apellido=req.body.apellidos;
     let contrasena=req.body.contrasena;
     let sexo = req.body.sexo;
     let codigo_rol=req.body.codigo_rol;
    // let activo=req.body.tamanio;

     
    const response = await conexion.pool.query('INSERT INTO control_usuarios.usuario(nombre, apellido, usuario, contrasena,sexo, codigo_rol,activo) VALUES($1, $2, $3, $4, $5,$6,true) RETURNING *', [nombre,apellido,usuario,contrasena,sexo,codigo_rol,]);
     


     console.log(response.rows[0])
     res.json(response.rows[0]);
  
    };



    const listarUsuarios = async (req, res) => {
      console.log(req.query);
      console.log(req.body);
       // const { usuario, contrasena } = req.query;
        console.log(req.body.usuario);
        let usuario = req.body.usuario;
        let contrasena = req.body.password;
        //console.log(contrasena);
        const response = await conexion.pool.query('SELECT nombre, apellido, usuario, contrasena,sexo, codigo_rol,activo FROM control_usuarios.usuario');
       // res.json(response.rows[0])
       console.log(response.rows)
       res.json(response.rows);
    
      };


      const desactivarUsuario = async (req, res) => {
        console.log(req.query);
        console.log(req.body);
         // const { usuario, contrasena } = req.query;
          console.log(req.body.usuario);
          let usuario = req.body.usuario;
        
          //console.log(contrasena);
          const response = await conexion.pool.query('UPDATE control_usuarios.usuario SET activo=false WHERE usuario = $1  RETURNING *',[usuario]);
         // res.json(response.rows[0])
         console.log(response.rows[0])
         res.json(response.rows[0]);
      
        };


      const activarUsuario = async (req, res) => {
        console.log(req.query);
        console.log(req.body);
         // const { usuario, contrasena } = req.query;
          console.log(req.body.usuario);
          let usuario = req.body.usuario;
        
          //console.log(contrasena);
          const response = await conexion.pool.query('UPDATE control_usuarios.usuario SET activo=true WHERE usuario = $1  RETURNING *',[usuario]);
         // res.json(response.rows[0])
         console.log(response.rows[0])
         res.json(response.rows[0]);
      
        };
  


    //  UPDATE control_usuarios.usuario SET activo=false WHERE usuario = 'AS';
    
 
  module.exports = {
   // insercionUsuario: insercionUsuario,
   // buscarUsuario: buscarUsuario,
    //registrarUsuario:registrarUsuario,
    iniciarSesion:iniciasSersion,
    registrarUsuario:registrarUsuario,
    listarUsuarios:listarUsuarios,
    desactivarUsuario:desactivarUsuario,
    activarUsuario:activarUsuario
   // lisatarEmpleados:lisatarEmpleados,
}


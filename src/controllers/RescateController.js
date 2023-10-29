
//const conexion = require('./conexionBD') 
const conexion = require('../../dataB')

const registrarRescate = async (req, res) => {
    console.log(req.body);
     // const { usuario, contrasena } = req.query;
    //  console.log(req.body.usuario);
      //console.log(contrasena);
      let lugar=req.body.lugar;
      let fecha=req.body.fecha;
      let tipoMascota=req.body.tipo;
      let sexo=req.body.sexo;
      let condicion=req.body.estado;
      let caracteristicas=req.body.caracteristicas;
      const response = await conexion.query('INSERT INTO control_rescates.rescate(lugar,fecha,tipoMascota,sexo,condicion,caracteristicas) VALUES($1,$2,$3,$4,$5,$6) RETURNING *', [lugar, fecha, tipoMascota,sexo,condicion,caracteristicas]);
     // res.json(response.rows[0])
     console.log(response.rows[0])
     res.json(response.rows[0]);
  
    };

  
    const listarRescates = async (req,res) =>{
      const response = await conexion.query('SELECT * FROM control_rescates.rescate;'  )
      res.json(response.rows)

    }

    const iniciasSersion = async (req, res) => {
      console.log(req.query);
      console.log(req.body);
       // const { usuario, contrasena } = req.query;
        console.log(req.body.usuario);
        let usuario = req.body.usuario;
        let contrasena = req.body.password;
        //console.log(contrasena);
        const response = await conexion.query('SELECT * FROM control_usuarios.usuario WHERE usuario=$1 AND contrasena = $2', [usuario, contrasena]);
       // res.json(response.rows[0])
       console.log(response.rows[0])
       res.json(response.rows[0]);
    
      };
    


      const listarXfecha = async (req,res) =>{
        console.log(req.body)

        let fecha1 = req.body.fechainicial;
        let fecha2 = req.body.fechafinal;
        const response = await conexion.query('SELECT * FROM control_rescates.rescate WHERE fecha BETWEEN $1 AND $2',[fecha1,fecha2])
        res.json(response.rows)
  
      }

      const eliminarValor = async (req,res) =>{
        console.log(req.body)
  
        let index = req.body.index;
  
        const response = await conexion.query('DELETE FROM control_rescates.rescate WHERE id_adopcion = $1 RETURNING *',[index])
        console.log(response.rows[0])
        res.json(response.rows[0]);
  
      }
  
  

    module.exports = {
        // insercionUsuario: insercionUsuario,
        // buscarUsuario: buscarUsuario,
         //registrarUsuario:registrarUsuario,
         registrarRescate:registrarRescate,
         listarRescates:listarRescates,
         listarXfecha:listarXfecha,
         eliminarValor:eliminarValor
        // lisatarEmpleados:lisatarEmpleados,
     }
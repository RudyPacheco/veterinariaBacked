//const conexion = require('./conexionBD') 
const conexion = require('../../dataB')

const registrarEsterilizacion = async (req, res) => {
    console.log(req.body);
     // const { usuario, contrasena } = req.query;
    //  console.log(req.body.usuario);
      //console.log(contrasena);
     // const response = await conexion.pool.query('SELECT * FROM control_usuarios.usuario WHERE usuario=$1 AND contrasena = $2', [usuario, contrasena]);
     // res.json(response.rows[0])
     let dpi = req.body.dpi;
     let nombres=req.body.nombres;
     let direccion=req.body.direccion;
     let telefono=req.body.telefono;
     let nombreMascota=req.body.nombreMascota;
     let numeroTurno=req.body.numeroTurno;
     let sexo=req.body.sexo;
     let tipo=req.body.tipo;
     let vacunas=req.body.vacunas;
     let espeVacunas=req.body.espeVacunas;
     let desparasitado=req.body.desparasitado;
     let preanada=req.body.preanada;
     let espePrenda=req.body.espePrenada;
     let edadMascota=req.body.edadMascota;
     let anticonceptivos=req.body.anticonceptivos;
     let enfermedad=req.body.enfermedad;
     let horaAyuno=req.body.horaAyuno;
     let fecha=req.body.fecha;
     let autorizado=req.body.autorizado;
     let observaciones=req.body.comentarios;
  



     
     const response = await conexion.query('INSERT INTO control_esterilizaciones.esterilizacion(dpi,nombres,direccion,telefono,nombreMascota,numeroTurno,sexo,tipo,vacunas,espeVacunas,desparasitado,preanada,espePrenada,edadMascota,anticonceptivos,enfermedad,horaAyuno,fecha,autorizado,observaciones) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20) RETURNING *', [dpi,nombres,direccion, telefono,nombreMascota,numeroTurno,sexo,tipo,vacunas,espeVacunas,desparasitado,preanada,espePrenda,edadMascota,anticonceptivos,enfermedad,horaAyuno,fecha,true,observaciones]);
     
     

     console.log(response.rows[0])
     res.json(response.rows[0]);
  
    };
  



    const listarEsterilizaciones = async (req,res) =>{
      const response = await conexion.query('SELECT * FROM control_esterilizaciones.esterilizacion;'  )
      res.json(response.rows)

    }







    module.exports = {
        // insercionUsuario: insercionUsuario,
        // buscarUsuario: buscarUsuario,
         //registrarUsuario:registrarUsuario,
         registrarEsterilizacion:registrarEsterilizacion,
         listarEsterilizaciones:listarEsterilizaciones
         
        // lisatarEmpleados:lisatarEmpleados,
     }
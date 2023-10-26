const  express = require('express');
//const usuario = require('../models/usuario');
const controllerEsterilizacion = require('../controllers/EstereilizacionController');



const router = express.Router();


//router.post('/login',controllerUsuario.iniciarSesion);

router.post('/registrar',controllerEsterilizacion.registrarEsterilizacion)
router.get('/listar',controllerEsterilizacion.listarEsterilizaciones)

module.exports = router;
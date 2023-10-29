const  express = require('express');
//const usuario = require('../models/usuario');
const controllerRescate = require('../controllers/RescateController');



const router = express.Router();


//router.post('/login',controllerUsuario.iniciarSesion);

router.post('/registrar',controllerRescate.registrarRescate);
router.get('/listar',controllerRescate.listarRescates);
router.post('/listarFecha',controllerRescate.listarXfecha);
router.post('/eliminar',controllerRescate.eliminarValor)

module.exports = router;
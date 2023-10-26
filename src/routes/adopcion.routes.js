const  express = require('express');
//const usuario = require('../models/usuario');
const controllerAdopcion = require('../controllers/AdopcionController');



const router = express.Router();


//router.post('/login',controllerUsuario.iniciarSesion);

router.post('/registrar',controllerAdopcion.registrarAdopcion)
router.get('/listar',controllerAdopcion.listarAdopciones)

module.exports = router;
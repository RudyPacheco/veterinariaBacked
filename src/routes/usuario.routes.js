const  express = require('express');
const usuario = require('../models/usuario');
const controllerUsuario = require('../controllers/UserController');



const router = express.Router();


router.post('/login',controllerUsuario.iniciarSesion);
router.post('/registrar',controllerUsuario.registrarUsuario);
router.get('/getUsers',controllerUsuario.listarUsuarios);
router.post('/activar',controllerUsuario.activarUsuario);
router.post('/desactivar',controllerUsuario.desactivarUsuario);



module.exports = router;
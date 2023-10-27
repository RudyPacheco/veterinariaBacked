const express = require('express');


const app = express();

require('dotenv').config()

const mongoose = require('mongoose');
const cors = require('cors');
const usuarioRoutes = require('./src/routes/usuario.routes');
const adocopcionRoutres = require('./src/routes/adopcion.routes');
const rescateRoutes = require('./src/routes/rescate.routes');
const esterilizacionRoutes = require('./src/routes/esterilizacion.routes')
const bodyParser = require('body-parser')









app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
  }));

app.use(cors());

app.use('/user',usuarioRoutes);
app.use('/adopcion',adocopcionRoutres);
app.use('/rescate',rescateRoutes);
app.use('/esterilizacion',esterilizacionRoutes);

app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))
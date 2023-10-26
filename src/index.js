const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuario.routes');
const adocopcionRoutres = require('./routes/adopcion.routes');
const rescateRoutes = require('./routes/rescate.routes');
const esterilizacionRoutes = require('./routes/esterilizacion.routes')
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
  }));

app.use(cors());

app.use('/user',usuarioRoutes);
app.use('/adopcion',adocopcionRoutres);
app.use('/rescate',rescateRoutes);
app.use('/esterilizacion',esterilizacionRoutes);

app.listen(3000, ()=>{
    console.log("servidor en el puerto 3000");
});
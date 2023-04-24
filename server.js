const app = require('./config/app');
const dotenv = require('dotenv');
const conexionDB = require('./config/db');
dotenv.config({path:'./config.env'})

const port = process.env.PORT;

(async () => {
    try {
      await conexionDB.authenticate();
      console.log('Conexión con la base de datos exitosa');
    } catch (error) {
      console.error('Error al conectar con la base de datos:', error);
    }
  })();
  
  app.listen(port,()=>{
    console.log("Ejecutando en el puerto " + port)
});
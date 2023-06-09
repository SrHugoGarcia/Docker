const { Sequelize } = require('sequelize');

  const conexionDB = new Sequelize('Docker', 'root', 'contraseña', {
    host: 'localhost', // aquí debes proporcionar la dirección IP o el nombre de host del servidor
    port: 3306, // aquí debes proporcionar el número de puerto de la base de datos
    dialect: 'mariadb',
    logging: false, // opcional, para desactivar los registros en la consola
  });

module.exports = conexionDB;

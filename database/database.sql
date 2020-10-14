CREATE DATABASE perfiles_db;

USE perfiles_db;

CREATE TABLE perfiles(
id INT(11) NOT NULL PRIMARY KEY /*AUTO_INCREMENT*/,   /*usar el autoincremento si sirve*/
nombre VARCHAR(20) ,
segundoNombre VARCHAR(20) ,
apellido VARCHAR(20) ,
segundoApellido VARCHAR(20) ,
email VARCHAR(40) NOT NULL,
constrasena VARCHAR(60) NOT NULL,
estado BOOLEAN DEFAULT TRUE,
ubicacion VARCHAR(20),
descripcion VARCHAR(150),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
UNIQUE(email),
UNIQUE(id)
);


/*DESCRIBE perfiles;*/
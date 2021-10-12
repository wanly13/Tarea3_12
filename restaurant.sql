create database restaurant;

use restaurant;
 
CREATE TABLE menu (
  Nombre_del_Plato varchar(20),
  precio int,
  create_date  DATETIME NOT NULL,
  modified_date DATETIME NOT NULL
);

INSERT INTO menu(Nombre_del_Plato,precio,create_date,modified_date) VALUES 
('Ceviche',50,now(),now()),
('Pachamanca',70,now(),now()),
('Chicharron',60,now(),now()),
('Pescado Frito',30,now(),now()),
('Trucha Frita',40,now(),now());


SELECT Nombre_del_Plato, precio, create_date, modified_date
FROM menu;
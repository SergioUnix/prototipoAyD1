
CREATE DATABASE prototipoBD;
USE prototipoBD;
 


/*=============================================== tipo*/
CREATE TABLE tipo(
   id_tipo int primary key auto_increment,
   tipo VARCHAR(500) not null  
); 


INSERT into tipo (tipo) values('Administrador');
INSERT into tipo (tipo) values('Cliente'); 

 /* =====================         Tabla de usuario*/
CREATE TABLE usuario(
   id_usuario int primary key auto_increment,
   nombre VARCHAR(500) not null,  
   apellido VARCHAR(500) not null,   
   correo VARCHAR(500) not null UNIQUE,     
   contrasenia VARCHAR(500) not null,  
   confirmacion VARCHAR(500) not null,    
   nac DATE,  
   pais VARCHAR(500) not null,   
   foto VARCHAR(500) not null,    
   creditos Decimal(7,2),
   fk_tipo int,
   CONSTRAINT fk_fk_tipo FOREIGN KEY (fk_tipo) REFERENCES tipo (id_tipo)
); 
insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('sergio','ramirez',
'sergiounix@gmail.com','1234','Confirmado',STR_TO_DATE('05.01.1993' ,GET_FORMAT(date,'USA')),'Guatemala','uploads/default/usuarios/sergio.jpg',10000,1);

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('madelyn','barraza',
'1madesitalor@gmail.com','1234','Confirmado',STR_TO_DATE('05.01.1993',GET_FORMAT(date,'USA')),'Guatemala','uploads/default/usuarios/made.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('alba','Al',
'1albaunix@gmail.com','1234','Confirmado',STR_TO_DATE('03.08.1992',GET_FORMAT(date,'USA')),'Guatemala','uploads/default/usuarios/alba.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('alvaro','Alv',
'1alvarounix@gmail.com','1234','Confirmado',STR_TO_DATE('01.10.1994',GET_FORMAT(date,'USA')),'Armenia','uploads/default/usuarios/alvaro.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('brat','bra',
'1bratunix@gmail.com','1234','Confirmado',STR_TO_DATE('07.11.1995',GET_FORMAT(date,'USA')),'Bahamas','uploads/default/usuarios/brat.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('brian','bri',
'1brianunix@gmail.com','1234','Confirmado',STR_TO_DATE('09.12.1996',GET_FORMAT(date,'USA')),'Benin','uploads/default/usuarios/brian.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('chris','chr',
'1chrisunix@gmail.com','1234','Confirmado',STR_TO_DATE('02.09.1997',GET_FORMAT(date,'USA')),'Belice','uploads/default/usuarios/chris.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('cristiano','cri',
'1cristianounix@gmail.com','1234','Confirmado',STR_TO_DATE('05.05.1998',GET_FORMAT(date,'USA')),'Bolivia','uploads/default/usuarios/cristiano.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('dana','dan',
'1danaunix@gmail.com','1234','Confirmado',STR_TO_DATE('03.08.1999',GET_FORMAT(date,'USA')),'Australia','uploads/default/usuarios/dana.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('derbez','der',
'1derbezunix@gmail.com','1234','Confirmado',STR_TO_DATE('06.07.1994',GET_FORMAT(date,'USA')),'Chile','uploads/default/usuarios/derbez.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('george','geo',
'1georgeunix@gmail.com','1234','Confirmado',STR_TO_DATE('06.07.1994',GET_FORMAT(date,'USA')),'China','uploads/default/usuarios/george.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('jaime','jai',
'1jaimeunix@gmail.com','1234','Confirmado',STR_TO_DATE('06.07.2001',GET_FORMAT(date,'USA')),'Colombia','uploads/default/usuarios/jaime.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('jhonson','jho',
'1jhonsonunix@gmail.com','1234','Confirmado',STR_TO_DATE('08.07.1989',GET_FORMAT(date,'USA')),'Eslovenia','uploads/default/usuarios/jhonson.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('leonardo','leo',
'1leonardounix@gmail.com','1234','Confirmado',STR_TO_DATE('07.11.1995',GET_FORMAT(date,'USA')),'Estonia','uploads/default/usuarios/leonardo.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('najwa','naj',
'1najwaunix@gmail.com','1234','Confirmado',STR_TO_DATE('04.12.2002',GET_FORMAT(date,'USA')),'Jamaica','uploads/default/usuarios/najwa.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('pedro','ped',
'1pedrounix@gmail.com','1234','Confirmado',STR_TO_DATE('01.08.1988',GET_FORMAT(date,'USA')),'España','uploads/default/usuarios/pedro.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('rio','Ri',
'1riounix@gmail.com','1234','Confirmado',STR_TO_DATE('07.07.1999',GET_FORMAT(date,'USA')),'Indonesia','uploads/default/usuarios/rio.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('robert','rob',
'1robertunix@gmail.com','1234','Confirmado',STR_TO_DATE('04.11.1985',GET_FORMAT(date,'USA')),'Libia','uploads/default/usuarios/robert.jpg',10000,2); 

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('selena','sel',
'1selenaunix@gmail.com','1234','Confirmado',STR_TO_DATE('01.04.1996',GET_FORMAT(date,'USA')),'Islas Farce','uploads/default/usuarios/selena.jpg',10000,2);

insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) values('tom','To',
'1tomunix@gmail.com','1234','Confirmado',STR_TO_DATE('04.10.1980',GET_FORMAT(date,'USA')),'Paraguay','uploads/default/usuarios/tom.jpg',10000,2); 



 /* =========================================== categoria*/
CREATE TABLE categoria(
   id_categoria int primary key auto_increment,
   categoria VARCHAR(500) not null
);






insert into categoria (categoria) values('Monitores'); 
insert into categoria (categoria) values('Accesorios'); 
insert into categoria (categoria) values('Memorias'); 
insert into categoria (categoria) values('Computadoras'); 
insert into categoria (categoria) values('Hardware');
insert into categoria (categoria) values('Software');
insert into categoria (categoria) values('Gammer');












 /* ======================================================================== Tabla Producto*/
CREATE TABLE producto(
   id_producto int primary key auto_increment,
   producto VARCHAR(500) not null,
   estado VARCHAR(500) not null, 
   fk_usuario int,     
   precio Decimal(7,2),  
   detalle VARCHAR(500) not null,    
   fk_categoria int,
   foto VARCHAR(500) not null,
   palabras VARCHAR(500) not null,
   user_compra int,
   CONSTRAINT fk_fk_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario (id_usuario),
   CONSTRAINT fk_fk_categoria FOREIGN KEY (fk_categoria) REFERENCES categoria (id_categoria)
   ON DELETE CASCADE
);



insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Alien','Sin Bloquear',2,'500.50','producto importado de USA',1, 'uploads/default/productos/nike.jpg','zapatos calzado',0); 
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Asus','Sin Bloquear',2,'1000.50','Zapatos de Calidad en precio Normal',1, 'uploads/default/productos/flexi.jpg','flexible comodo',0); 
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('TCL','Sin Bloquear',2,'1500.20','Zapatos de diferente calidad y diferentes colores',1, 'uploads/default/productos/fila.jpg','deportivo suave',0); 
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Asus 4k','Sin Bloquear',2,'1200.50','Marca registrada',1, 'uploads/default/productos/nature.jpg','natural caro',0); 
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Lenovo','Sin Bloquear',2,'1400.50','Zapato de dama de alta calidad',1, 'uploads/default/productos/chanel.jpg','mujer elegante',0); 

insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Licuadora Oster','Sin Bloquear',3,'750.50','Producto en Oferta pensado para el hogar',2,'uploads/default/productos/oster.jpg','cocina calidad',0); 
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Microondas Mabe','Sin Bloquear',3,'2200.50','Producto de calidad para cocina',2,'uploads/default/productos/microMabe.jpg','duradero calidad',0); 
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Refrigeradora LG','Sin Bloquear',3,'5500.50','Refrigerador con 10 años de garantia para tu cocina',2,'uploads/default/productos/refriLg.jpg','cocina frio',0); 
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Cafetera Samsung','Sin Bloquear',3,'600.50','Cafetera de lujo diseñada para tu hogar',2,'uploads/default/productos/cafeSamsung.jpg','cafe caliente',0); 
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Lavadora LG','Sin Bloquear',3,'4500.50','Producto con 10 años de garantia para tu hogar',2,'uploads/default/productos/lavaLg.jpg','hogar electro',0);

insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Memoria 8GB','Sin Bloquear',4,'1100.50','Producto de prueba jardin',3,'uploads/default/productos/grama.jpg','jar verde',0);
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Memory','Sin Bloquear',4,'2500.00','Producto de prueba jardin',4,'uploads/default/productos/sala.jpg','sillon aire',0);
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Ram 4x4','Sin Bloquear',4,'500.00','Producto de prueba jardin',3,'uploads/default/productos/guantes.jpg','manos blanco',0);
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Ram XMS','Sin Bloquear',4,'200.50','Producto de prueba jardin',3,'uploads/default/productos/insecticida.jpg','mosco volador',0);
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('ChipSet','Sin Bloquear',4,'1300.50','Producto de prueba jardin',3,'uploads/default/productos/grama2.jpg','banca sentarse',0);

insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Pc Asus','Sin Bloquear',5,'800.50','Producto de prueba para el hogar',4,'uploads/default/productos/paqueteLimpieza.jpg','limpio guantes',0);
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Pc Lenovo','Sin Bloquear',5,'1300.50','Producto de prueba para el hogar',4,'uploads/default/productos/paquete2.jpg','limpieza desinfectante',0);
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Pc HP','Sin Bloquear',5,'180.50','Producto de prueba hogar',4,'uploads/default/productos/pintura.jpg','color',0);
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Pc Toshiba','Sin Bloquear',5,'80.50','Producto de prueba hogar',4,'uploads/default/productos/bombillo.jpg','luz bombi',0);
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Pc Sony','Sin Bloquear',5,'3300.50','Producto de prueba hogar',4,'uploads/default/productos/comedor.jpg','sentarse comer',0);

insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Software','Sin Bloquear',6,'4300.50','Producto para comunicacion',5,'uploads/default/productos/huawei.jpg','cel tel',0);
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Software v2','Sin Bloquear',6,'6300.50','Producto para comunicacion',5,'uploads/default/productos/iphone.jpg','manzana calidad',0);
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Software v3','Sin Bloquear',6,'3800.50','Producto para comunicacion',5,'uploads/default/productos/motorola.jpg','nuevo moto',0);

insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Office','Sin Bloquear',7,'500.00','Productos para usar en exterior',6,'uploads/default/productos/toldo.jpg','tapar bajo',0);
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Ares','Sin Bloquear',7,'450.00','Productos para usar en exterior',6,'uploads/default/productos/sombrilla.jpg','impermeable tapar',0);
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Security','Sin Bloquear',7,'5000.00','Productos para usar en exterior',6,'uploads/default/productos/panel.jpg','luz sol',0);

insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('GamePad','Sin Bloquear',8,'500.00','Accesorios para Autos',7,'uploads/default/productos/cargador.jpg','luz corriente',0);
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('Audifinos Gammer','Sin Bloquear',8,'300.00','Accesorios para Autos',7,'uploads/default/productos/cobertor.jpg','timon interior',0);
insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra) values('MosePad','Sin Bloquear',8,'1400.00','Accesorios para Autos',7,'uploads/default/productos/aspiradora.jpg','auto portatil',0);

select * from producto

 /* =====================================================================   Tabla comentario*/
CREATE TABLE comentario(
   id_comentario int primary key auto_increment,
   comentario VARCHAR(500) not null,
   fk_producto int,
   fk_usuario int,   
   fecha_creacion TimesTamp DEFAULT NOW(),
   CONSTRAINT fk_com_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario (id_usuario),
   CONSTRAINT fk_com_producto FOREIGN KEY (fk_producto) REFERENCES producto (id_producto)
   ON DELETE CASCADE
); 


insert into comentario (comentario,fk_producto,fk_usuario) values('cualquier comentario hacia el producto 6',6,2);
insert into comentario (comentario,fk_producto,fk_usuario) values('cualquier comentario hacia el producto 6',6,1); 
insert into comentario (comentario,fk_producto,fk_usuario) values('segundo comentario comentario hacia el producto 6',6,2);

insert into comentario (comentario,fk_producto,fk_usuario) values('cualquier comentario hacia el producto 7',7,1); 
insert into comentario (comentario,fk_producto,fk_usuario) values('cualquier comentario hacia el producto 7',7,3); 
insert into comentario (comentario,fk_producto,fk_usuario) values('segundo comentario hacia el producto 7',7,3); 


 /* ===========================================================          like*/
CREATE TABLE likes(
   id_likes int primary key auto_increment,
   fecha_creacion TimesTamp DEFAULT NOW(),
   fk_producto int,
   fk_usuario int,      
   CONSTRAINT fk_like_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario (id_usuario),
   CONSTRAINT fk_like_producto FOREIGN KEY (fk_producto) REFERENCES producto (id_producto)
   ON DELETE CASCADE
); 

insert into likes (fk_producto,fk_usuario) values(6,4);
insert into likes (fk_producto,fk_usuario) values(6,5); 
insert into likes (fk_producto,fk_usuario) values(6,6);
insert into likes (fk_producto,fk_usuario) values(6,7); 
insert into likes (fk_producto,fk_usuario) values(6,8); 
insert into likes (fk_producto,fk_usuario) values(6,9); 
insert into likes (fk_producto,fk_usuario) values(6,10); 
insert into likes (fk_producto,fk_usuario) values(6,11); 
insert into likes (fk_producto,fk_usuario) values(7,12); 
insert into likes (fk_producto,fk_usuario) values(7,13); 
insert into likes (fk_producto,fk_usuario) values(8,14); 
insert into likes (fk_producto,fk_usuario) values(8,15); 
insert into likes (fk_producto,fk_usuario) values(8,16); 
insert into likes (fk_producto,fk_usuario) values(9,17); 
insert into likes (fk_producto,fk_usuario) values(9,18); 
insert into likes (fk_producto,fk_usuario) values(9,19); 



 /* =====================================================                Dislike*/
CREATE TABLE Dislikes(
   id_Dislikes int primary key auto_increment,
   fecha_creacion TimesTamp DEFAULT NOW(),
   fk_producto int,
   fk_usuario int,      
   CONSTRAINT fk_Dislike_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario (id_usuario),
   CONSTRAINT fk_Dislike_producto FOREIGN KEY (fk_producto) REFERENCES producto (id_producto)
   ON DELETE CASCADE
); 




insert into Dislikes (fk_producto,fk_usuario) values(10,4);
insert into Dislikes (fk_producto,fk_usuario) values(10,5); 
insert into Dislikes (fk_producto,fk_usuario) values(10,6);
insert into Dislikes (fk_producto,fk_usuario) values(10,7); 
insert into Dislikes (fk_producto,fk_usuario) values(10,8); 
insert into Dislikes (fk_producto,fk_usuario) values(10,9); 
insert into Dislikes (fk_producto,fk_usuario) values(10,10); 
insert into Dislikes (fk_producto,fk_usuario) values(10,11); 
insert into Dislikes (fk_producto,fk_usuario) values(11,12); 
insert into Dislikes (fk_producto,fk_usuario) values(12,13); 
insert into Dislikes (fk_producto,fk_usuario) values(12,14); 
insert into Dislikes (fk_producto,fk_usuario) values(12,15); 
insert into Dislikes (fk_producto,fk_usuario) values(12,16); 
insert into Dislikes (fk_producto,fk_usuario) values(13,17); 
insert into Dislikes (fk_producto,fk_usuario) values(13,18); 
insert into Dislikes (fk_producto,fk_usuario) values(16,19); 



 /* ==============================================================           Compra */
CREATE TABLE compra(
   id_compra int primary key auto_increment,
   fecha_creacion TimesTamp DEFAULT NOW(),
   fk_cliente int,
   CONSTRAINT fk_compra_cliente FOREIGN KEY (fk_cliente) REFERENCES usuario (id_usuario)
   ON DELETE CASCADE
);       



 /* =========================================================================    Detalle */
CREATE TABLE detalle(
   id_detalle int primary key auto_increment,
   cantidad int,
   fk_producto int,
   fk_compra int,
   CONSTRAINT fk_detalle_producto FOREIGN KEY (fk_producto) REFERENCES producto (id_producto),
   CONSTRAINT fk_detalle_cliente FOREIGN KEY (fk_compra) REFERENCES compra (id_compra)
   ON DELETE CASCADE
);       

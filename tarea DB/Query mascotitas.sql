USE  mascotitas;
INSERT INTO categoria (nombre) VALUES ('Alimentos'); -- Agregar datos categoria
SELECT * FROM mascotitas.categoria;
SELECT * FROM categoria;

INSERT INTO cliente (nombre, email, contraseña, telefono) VALUES ('Juan Perez', 'juan@gmail.com', 'Juan1234', '8134590093'); -- Agregar datos a cliente
SELECT * FROM cliente;

SELECT * FROM venta;
INSERT INTO venta (tipoPago) VALUES ('tarjeta'); -- Agregar datos a tarjeta
INSERT INTO venta (tipoPago) VALUES ('efectivo'); 
INSERT INTO venta (tipoPago) VALUES ('transferencia'); 
SELECT * FROM servicios;
INSERT INTO servicios (nombre, descripcion, precio, imagen, venta_idventa, cliente_idcliente) 
VALUES ('Paseo de perros', 'Paseo para mascota con evidencia, paso dura 1 hora', '200', 'https://fielpet.com.ar/blog/content/images/size/w2000/2020/10/Tips-para-pasear-perros-2.jpg',
1, 2 ); -- Agregar datos a servicios

INSERT INTO servicios (nombre, descripcion, precio, imagen, venta_idventa, cliente_idcliente) 
VALUES ('baño a perros básico', 'incluye baño con shampoo completo y corte de uñas', '250', 'https://wakyma.com/blog/wp-content/uploads/2016/12/mitos-sobre-el-bano-de-los-perros-770x460.jpg',
2, 3 ); 
SELECT * FROM productos;
INSERT INTO productos (nombre, descripcion, precio, imagen, cliente_idcliente, venta_idventa, categoria_idcategoria ) 
VALUES ('Pelota mediana de tela', 'pelota de tela para perro', '125', 'https://img.kwcdn.com/product/1e13cb9279c/b7639206-c889-464e-b7de-a52565d31148_800x800.jpeg?imageView2/2/w/800/q/70',
2, 1, 1 ); -- Agregar datos a productos


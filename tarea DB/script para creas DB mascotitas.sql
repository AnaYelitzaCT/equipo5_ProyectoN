-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema new_schema1
-- -----------------------------------------------------
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cliente` (
  `idcliente` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(8) NOT NULL,
  PRIMARY KEY (`idcliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`productos` (
  `idproductos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `precio` DECIMAL NOT NULL,
  `imagen` VARCHAR(200) NOT NULL,
  `categoria_idcategoria` INT NOT NULL,
  PRIMARY KEY (`idproductos`, `categoria_idcategoria`),
  INDEX `fk_productos_categoria1_idx` (`categoria_idcategoria` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`servicios` (
  `idservicios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `imagen` VARCHAR(200) NOT NULL,
  `precio` DECIMAL NOT NULL,
  `venta_idventa` INT NOT NULL,
  `venta_cliente_idcliente` INT NOT NULL,
  `venta_venta_idventa` INT NOT NULL,
  `venta_venta_cliente_idcliente` INT NOT NULL,
  PRIMARY KEY (`idservicios`, `venta_idventa`, `venta_cliente_idcliente`, `venta_venta_idventa`, `venta_venta_cliente_idcliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`venta` (
  `idventa` INT NOT NULL AUTO_INCREMENT,
  `tipoPago` VARCHAR(45) NOT NULL,
  `total` DECIMAL NOT NULL,
  `cliente_idcliente` INT NOT NULL,
  `venta_idventa` INT NOT NULL,
  `venta_cliente_idcliente` INT NOT NULL,
  PRIMARY KEY (`idventa`, `cliente_idcliente`, `venta_idventa`, `venta_cliente_idcliente`),
  INDEX `fk_venta_cliente1_idx` (`cliente_idcliente` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cliente_has_servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cliente_has_servicios` (
  `cliente_idcliente` INT NOT NULL,
  `servicios_idservicios` INT NOT NULL,
  `servicios_venta_idventa` INT NOT NULL,
  `servicios_venta_cliente_idcliente` INT NOT NULL,
  `servicios_venta_venta_idventa` INT NOT NULL,
  `servicios_venta_venta_cliente_idcliente` INT NOT NULL,
  PRIMARY KEY (`cliente_idcliente`, `servicios_idservicios`, `servicios_venta_idventa`, `servicios_venta_cliente_idcliente`, `servicios_venta_venta_idventa`, `servicios_venta_venta_cliente_idcliente`),
  INDEX `fk_cliente_has_servicios_servicios1_idx` (`servicios_idservicios` ASC, `servicios_venta_idventa` ASC, `servicios_venta_cliente_idcliente` ASC, `servicios_venta_venta_idventa` ASC, `servicios_venta_venta_cliente_idcliente` ASC) VISIBLE,
  INDEX `fk_cliente_has_servicios_cliente1_idx` (`cliente_idcliente` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`servicios_has_venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`servicios_has_venta` (
  `servicios_idservicios` INT NOT NULL,
  `servicios_venta_idventa` INT NOT NULL,
  `servicios_venta_cliente_idcliente` INT NOT NULL,
  `servicios_venta_venta_idventa` INT NOT NULL,
  `servicios_venta_venta_cliente_idcliente` INT NOT NULL,
  `venta_idventa` INT NOT NULL,
  `venta_cliente_idcliente` INT NOT NULL,
  `venta_venta_idventa` INT NOT NULL,
  `venta_venta_cliente_idcliente` INT NOT NULL,
  PRIMARY KEY (`servicios_idservicios`, `servicios_venta_idventa`, `servicios_venta_cliente_idcliente`, `servicios_venta_venta_idventa`, `servicios_venta_venta_cliente_idcliente`, `venta_idventa`, `venta_cliente_idcliente`, `venta_venta_idventa`, `venta_venta_cliente_idcliente`),
  INDEX `fk_servicios_has_venta_venta1_idx` (`venta_idventa` ASC, `venta_cliente_idcliente` ASC, `venta_venta_idventa` ASC, `venta_venta_cliente_idcliente` ASC) VISIBLE,
  INDEX `fk_servicios_has_venta_servicios1_idx` (`servicios_idservicios` ASC, `servicios_venta_idventa` ASC, `servicios_venta_cliente_idcliente` ASC, `servicios_venta_venta_idventa` ASC, `servicios_venta_venta_cliente_idcliente` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`venta_has_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`venta_has_productos` (
  `venta_idventa` INT NOT NULL,
  `venta_cliente_idcliente` INT NOT NULL,
  `venta_venta_idventa` INT NOT NULL,
  `venta_venta_cliente_idcliente` INT NOT NULL,
  `productos_idproductos` INT NOT NULL,
  `productos_categoria_idcategoria` INT NOT NULL,
  PRIMARY KEY (`venta_idventa`, `venta_cliente_idcliente`, `venta_venta_idventa`, `venta_venta_cliente_idcliente`, `productos_idproductos`, `productos_categoria_idcategoria`),
  INDEX `fk_venta_has_productos_productos1_idx` (`productos_idproductos` ASC, `productos_categoria_idcategoria` ASC) VISIBLE,
  INDEX `fk_venta_has_productos_venta1_idx` (`venta_idventa` ASC, `venta_cliente_idcliente` ASC, `venta_venta_idventa` ASC, `venta_venta_cliente_idcliente` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

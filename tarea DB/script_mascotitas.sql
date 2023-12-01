-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mascotitas_1
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mascotitas_1
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mascotitas_1` DEFAULT CHARACTER SET utf8mb3 ;
USE `mascotitas_1` ;

-- -----------------------------------------------------
-- Table `mascotitas_1`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mascotitas_1`.`categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mascotitas_1`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mascotitas_1`.`cliente` (
  `idcliente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`idcliente`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mascotitas_1`.`venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mascotitas_1`.`venta` (
  `idventa` INT NOT NULL AUTO_INCREMENT,
  `tipoPago` VARCHAR(45) NOT NULL,
  `total` DECIMAL(10,0) NULL DEFAULT NULL,
  PRIMARY KEY (`idventa`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mascotitas_1`.`cliente_has_venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mascotitas_1`.`cliente_has_venta` (
  `cliente_idcliente` INT NOT NULL,
  `venta_idventa` INT NOT NULL,
  PRIMARY KEY (`cliente_idcliente`, `venta_idventa`),
  INDEX `fk_cliente_has_venta_venta1_idx` (`venta_idventa` ASC) VISIBLE,
  INDEX `fk_cliente_has_venta_cliente1_idx` (`cliente_idcliente` ASC) VISIBLE,
  CONSTRAINT `fk_cliente_has_venta_cliente1`
    FOREIGN KEY (`cliente_idcliente`)
    REFERENCES `mascotitas_1`.`cliente` (`idcliente`),
  CONSTRAINT `fk_cliente_has_venta_venta1`
    FOREIGN KEY (`venta_idventa`)
    REFERENCES `mascotitas_1`.`venta` (`idventa`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mascotitas_1`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mascotitas_1`.`productos` (
  `idproductos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `precio` DECIMAL(10,0) NOT NULL,
  `imagen` VARCHAR(200) NOT NULL,
  `cliente_idcliente` INT NOT NULL,
  `venta_idventa` INT NOT NULL,
  `categoria_idcategoria` INT NOT NULL,
  PRIMARY KEY (`idproductos`, `cliente_idcliente`, `venta_idventa`, `categoria_idcategoria`),
  INDEX `fk_productos_cliente_idx` (`cliente_idcliente` ASC) VISIBLE,
  INDEX `fk_productos_venta1_idx` (`venta_idventa` ASC) VISIBLE,
  INDEX `fk_productos_categoria1_idx` (`categoria_idcategoria` ASC) VISIBLE,
  CONSTRAINT `fk_productos_categoria1`
    FOREIGN KEY (`categoria_idcategoria`)
    REFERENCES `mascotitas_1`.`categoria` (`idcategoria`),
  CONSTRAINT `fk_productos_cliente`
    FOREIGN KEY (`cliente_idcliente`)
    REFERENCES `mascotitas_1`.`cliente` (`idcliente`),
  CONSTRAINT `fk_productos_venta1`
    FOREIGN KEY (`venta_idventa`)
    REFERENCES `mascotitas_1`.`venta` (`idventa`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mascotitas_1`.`servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mascotitas_1`.`servicios` (
  `idservicios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `precio` DECIMAL(10,0) NOT NULL,
  `imagen` VARCHAR(200) NOT NULL,
  `venta_idventa` INT NOT NULL,
  `cliente_idcliente` INT NOT NULL,
  PRIMARY KEY (`idservicios`, `venta_idventa`, `cliente_idcliente`),
  INDEX `fk_servicios_venta1_idx` (`venta_idventa` ASC) VISIBLE,
  INDEX `fk_servicios_cliente1_idx` (`cliente_idcliente` ASC) VISIBLE,
  CONSTRAINT `fk_servicios_cliente1`
    FOREIGN KEY (`cliente_idcliente`)
    REFERENCES `mascotitas_1`.`cliente` (`idcliente`),
  CONSTRAINT `fk_servicios_venta1`
    FOREIGN KEY (`venta_idventa`)
    REFERENCES `mascotitas_1`.`venta` (`idventa`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

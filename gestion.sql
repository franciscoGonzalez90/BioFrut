-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2014 a las 12:10:40
-- Versión del servidor: 5.6.14
-- Versión de PHP: 5.5.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `gestion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bandeja`
--

CREATE TABLE IF NOT EXISTS `bandeja` (
  `IdBandeja` int(50) NOT NULL AUTO_INCREMENT,
  `NumeroBandeja` int(50) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL,
  `IdTarjeta` int(50) NOT NULL,
  `IdTipoProducto` int(50) NOT NULL,
  PRIMARY KEY (`IdBandeja`),
  KEY `hora` (`Hora`),
  KEY `numerobandeja` (`NumeroBandeja`),
  KEY `NumeroBandeja_2` (`NumeroBandeja`),
  KEY `NumeroBandeja_3` (`NumeroBandeja`),
  KEY `fk_idBandeja` (`IdTarjeta`),
  KEY `fk_idTipoProducto` (`IdTipoProducto`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=10 ;

--
-- Volcado de datos para la tabla `bandeja`
--

INSERT INTO `bandeja` (`IdBandeja`, `NumeroBandeja`, `Fecha`, `Hora`, `IdTarjeta`, `IdTipoProducto`) VALUES
(1, 23, '2014-11-03', '23:23:00', 1, 1),
(2, 20, '2014-11-02', '23:23:01', 2, 1),
(3, 20, '2014-11-03', '23:23:00', 2, 1),
(4, 45, '2014-11-04', '23:23:00', 3, 1),
(5, 35, '2014-11-03', '23:23:00', 4, 1),
(6, 86, '2014-11-03', '12:45:00', 5, 1),
(7, 15, '2014-11-05', '12:12:00', 3, 1),
(8, 12, '2014-11-04', '23:23:23', 4, 1),
(9, 34, '2014-10-08', '23:23:23', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bodega`
--

CREATE TABLE IF NOT EXISTS `bodega` (
  `IdBodega` int(50) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `Direccion` varchar(50) COLLATE utf8_bin NOT NULL,
  `Telefono` varchar(50) COLLATE utf8_bin NOT NULL,
  `IdCiudad` int(50) NOT NULL,
  PRIMARY KEY (`IdBodega`),
  KEY `fk_idCiudad` (`IdCiudad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `bodega`
--

INSERT INTO `bodega` (`IdBodega`, `Nombre`, `Direccion`, `Telefono`, `IdCiudad`) VALUES
(1, 'carsol', 'coihueco km12', '042-2345678', 1),
(2, 'las viscachas', 'aerodromo', '042-2987654', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificacion`
--

CREATE TABLE IF NOT EXISTS `calificacion` (
  `IdCalificacion` int(50) NOT NULL DEFAULT '0',
  `Nota` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdCalificacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `calificacion`
--

INSERT INTO `calificacion` (`IdCalificacion`, `Nota`) VALUES
(1, 'A5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargo`
--

CREATE TABLE IF NOT EXISTS `cargo` (
  `IdCargo` int(50) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `Area` varchar(50) COLLATE utf8_bin NOT NULL,
  `Descripcion` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdCargo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `cargo`
--

INSERT INTO `cargo` (`IdCargo`, `Nombre`, `Area`, `Descripcion`) VALUES
(1, 'Administrador', 'Informatica ', 'encargado de los sistemas de empresa.'),
(2, 'Digitador', 'Produccion', 'Encargado de ingresar las bandejas en produccion'),
(3, 'Bodeguero', 'Bodega', 'Encargado de la bodega y la administracion de la llegada de los pales'),
(4, 'Gerente', 'Gerencia', 'encargado de alguna gerencia y de la toma de decisiones en la empresa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudad`
--

CREATE TABLE IF NOT EXISTS `ciudad` (
  `IdCiudad` int(50) NOT NULL DEFAULT '0',
  `Nombre` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `IdRegion` int(50) NOT NULL,
  PRIMARY KEY (`IdCiudad`),
  KEY `fk_idRegion` (`IdRegion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `ciudad`
--

INSERT INTO `ciudad` (`IdCiudad`, `Nombre`, `IdRegion`) VALUES
(1, 'Chillan', 1),
(2, 'San Nicolas', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `controlbodega`
--

CREATE TABLE IF NOT EXISTS `controlbodega` (
  `IdControlBodega` int(50) NOT NULL,
  `CantidadPale` int(50) NOT NULL,
  `IdControl` int(50) NOT NULL,
  `IdDespacho` int(50) NOT NULL,
  `IdZona` int(50) NOT NULL,
  KEY `fk_iddespacho` (`IdDespacho`),
  KEY `fk_idzona` (`IdZona`),
  KEY `fk_idcontrolcalidadc` (`IdControl`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `controlbodega`
--

INSERT INTO `controlbodega` (`IdControlBodega`, `CantidadPale`, `IdControl`, `IdDespacho`, `IdZona`) VALUES
(1, 23, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `controlcalidad`
--

CREATE TABLE IF NOT EXISTS `controlcalidad` (
  `IdControl` int(50) NOT NULL DEFAULT '0',
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL,
  `TotalMerma` int(50) NOT NULL,
  `IdCalificacion` int(50) NOT NULL,
  `IdEstadoProducto` int(50) NOT NULL,
  PRIMARY KEY (`IdControl`),
  KEY `fk_idCalificacion` (`IdCalificacion`),
  KEY `fk_idestadoproducto` (`IdEstadoProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `controlcalidad`
--

INSERT INTO `controlcalidad` (`IdControl`, `Fecha`, `Hora`, `TotalMerma`, `IdCalificacion`, `IdEstadoProducto`) VALUES
(1, '1990-12-12', '23:23:00', 23, 1, 1),
(2, '1990-12-03', '12:12:00', 2, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuadrilla`
--

CREATE TABLE IF NOT EXISTS `cuadrilla` (
  `IdCuadrilla` int(50) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `IdHuerto` int(50) NOT NULL,
  PRIMARY KEY (`IdCuadrilla`),
  KEY `fk_idHuerto` (`IdHuerto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `cuadrilla`
--

INSERT INTO `cuadrilla` (`IdCuadrilla`, `Nombre`, `IdHuerto`) VALUES
(1, 'Cuadrilla 1', 1),
(2, 'Cuadrilla 2', 1),
(3, 'Cuadrilla 3', 1),
(4, 'Cuadrilla 4', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `despacho`
--

CREATE TABLE IF NOT EXISTS `despacho` (
  `IdDespacho` int(50) NOT NULL DEFAULT '0',
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL,
  `CantidadPale` int(50) NOT NULL,
  `IdTipoProducto` int(50) NOT NULL,
  `IdControl` int(50) NOT NULL,
  `IdCuadrilla` int(50) NOT NULL,
  PRIMARY KEY (`IdDespacho`),
  KEY `fk_idTipoProductoGuia` (`IdTipoProducto`),
  KEY `fk_idcontrolcalidad` (`IdControl`),
  KEY `fk_cuadrilla` (`IdCuadrilla`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `despacho`
--

INSERT INTO `despacho` (`IdDespacho`, `Fecha`, `Hora`, `CantidadPale`, `IdTipoProducto`, `IdControl`, `IdCuadrilla`) VALUES
(1, '1990-12-24', '23:23:00', 23, 1, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_cuadrilla`
--

CREATE TABLE IF NOT EXISTS `detalle_cuadrilla` (
  `IdDetalle_Cuadrilla` int(50) NOT NULL AUTO_INCREMENT,
  `IdCuadrilla` int(50) NOT NULL,
  `IdTarjeta` int(50) NOT NULL,
  PRIMARY KEY (`IdDetalle_Cuadrilla`),
  KEY `fk_idcuadrilla` (`IdCuadrilla`),
  KEY `fk_idtarjeta` (`IdTarjeta`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `detalle_cuadrilla`
--

INSERT INTO `detalle_cuadrilla` (`IdDetalle_Cuadrilla`, `IdCuadrilla`, `IdTarjeta`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(6, 4, 4),
(7, 3, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadoproducto`
--

CREATE TABLE IF NOT EXISTS `estadoproducto` (
  `IdEstadoProducto` int(50) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdEstadoProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `estadoproducto`
--

INSERT INTO `estadoproducto` (`IdEstadoProducto`, `Nombre`) VALUES
(1, 'Maduro'),
(2, 'Deshidratado'),
(3, 'Larva');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fundo`
--

CREATE TABLE IF NOT EXISTS `fundo` (
  `IdFundo` int(50) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `Direccion` varchar(50) COLLATE utf8_bin NOT NULL,
  `IdCiudad` int(50) NOT NULL,
  PRIMARY KEY (`IdFundo`),
  KEY `fk_idCiudadfundo` (`IdCiudad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `fundo`
--

INSERT INTO `fundo` (`IdFundo`, `Nombre`, `Direccion`, `IdCiudad`) VALUES
(1, 'Las torcasas', 'coihueco carsol', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `huerto`
--

CREATE TABLE IF NOT EXISTS `huerto` (
  `IdHuerto` int(50) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `IdPredio` int(50) NOT NULL,
  PRIMARY KEY (`IdHuerto`),
  KEY `fk_idPredio` (`IdPredio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `huerto`
--

INSERT INTO `huerto` (`IdHuerto`, `Nombre`, `IdPredio`) VALUES
(1, 'Los Tilos', 1),
(2, 'las Olivias', 1),
(3, 'Los Manzanos', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE IF NOT EXISTS `pais` (
  `IdPais` int(50) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdPais`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `pais`
--

INSERT INTO `pais` (`IdPais`, `Nombre`) VALUES
(1, 'Chile'),
(2, 'argentina');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil`
--

CREATE TABLE IF NOT EXISTS `perfil` (
  `IdPerfil` int(50) NOT NULL,
  `Login` varchar(50) COLLATE utf8_bin NOT NULL,
  `Password` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdPerfil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `perfil`
--

INSERT INTO `perfil` (`IdPerfil`, `Login`, `Password`) VALUES
(1, 'ccaro', '123456'),
(3, 'dgonzalez', '123456'),
(4, 'fgonzalez', '123456'),
(5, 'ccartes', '123456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `predio`
--

CREATE TABLE IF NOT EXISTS `predio` (
  `IdPredio` int(50) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `IdFundo` int(50) NOT NULL,
  PRIMARY KEY (`IdPredio`),
  KEY `fk_idfundo` (`IdFundo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `predio`
--

INSERT INTO `predio` (`IdPredio`, `Nombre`, `IdFundo`) VALUES
(1, 'Los Abedules', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE IF NOT EXISTS `producto` (
  `IdProducto` int(50) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`IdProducto`, `Nombre`) VALUES
(1, 'arandano'),
(2, 'Esparrago');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `region`
--

CREATE TABLE IF NOT EXISTS `region` (
  `IdRegion` int(50) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `IdPais` int(50) NOT NULL,
  PRIMARY KEY (`IdRegion`),
  KEY `fk_idPais` (`IdPais`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `region`
--

INSERT INTO `region` (`IdRegion`, `Nombre`, `IdPais`) VALUES
(1, 'Bio Bio', 1),
(2, 'Maule', 1),
(3, 'Araucania', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarjetatrabajador`
--

CREATE TABLE IF NOT EXISTS `tarjetatrabajador` (
  `IdTarjeta` int(50) NOT NULL,
  `FechaIngreso` date NOT NULL,
  `Rut` varchar(20) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdTarjeta`),
  KEY `fk_idRut` (`Rut`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `tarjetatrabajador`
--

INSERT INTO `tarjetatrabajador` (`IdTarjeta`, `FechaIngreso`, `Rut`) VALUES
(1, '1990-03-13', '17423122-2'),
(2, '2014-11-05', '17749449-6'),
(3, '2014-11-01', '11808071-8'),
(4, '2014-11-02', '11808926-k'),
(5, '2014-11-04', '11897876-5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoalmacenaje`
--

CREATE TABLE IF NOT EXISTS `tipoalmacenaje` (
  `IdTipoAlmacenaje` int(50) NOT NULL DEFAULT '0',
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdTipoAlmacenaje`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `tipoalmacenaje`
--

INSERT INTO `tipoalmacenaje` (`IdTipoAlmacenaje`, `Nombre`) VALUES
(1, 'Fresco');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoproducto`
--

CREATE TABLE IF NOT EXISTS `tipoproducto` (
  `IdTipoProducto` int(50) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `EstacionCosecha` varchar(50) COLLATE utf8_bin NOT NULL,
  `IdProducto` int(50) NOT NULL,
  PRIMARY KEY (`IdTipoProducto`),
  KEY `fk_idProducto` (`IdProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `tipoproducto`
--

INSERT INTO `tipoproducto` (`IdTipoProducto`, `Nombre`, `EstacionCosecha`, `IdProducto`) VALUES
(1, 'Oneill', 'noviembre 2014', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajador`
--

CREATE TABLE IF NOT EXISTS `trabajador` (
  `Rut` varchar(20) COLLATE utf8_bin NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `Apellido` varchar(50) COLLATE utf8_bin NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `Telefono` varchar(20) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Rut`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `trabajador`
--

INSERT INTO `trabajador` (`Rut`, `Nombre`, `Apellido`, `FechaNacimiento`, `Telefono`) VALUES
('11808071-8', 'carolina', 'llanos', '2014-11-01', '123456'),
('11808926-k', 'daniel ', 'gonzalez', '2014-11-02', '123456'),
('11897876-5', 'juan ', 'gonzalez', '2014-11-06', '7463527272'),
('17423122-2', 'cristina', 'caro', '1990-03-23', '846352552'),
('17749449-6', 'francisco', 'gonzalez', '1990-07-13', '90813596');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `IdUsuario` int(50) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `Apellido` varchar(50) COLLATE utf8_bin NOT NULL,
  `IdPerfil` int(50) NOT NULL,
  `IdCargo` int(50) NOT NULL,
  PRIMARY KEY (`IdUsuario`),
  KEY `fk_idPerfil` (`IdPerfil`),
  KEY `fk_idCargoUsuario` (`IdCargo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`IdUsuario`, `Nombre`, `Apellido`, `IdPerfil`, `IdCargo`) VALUES
(1, 'Cristina', 'Caro', 1, 1),
(2, 'Daniela', 'Gonzalez', 3, 4),
(3, 'Alan', 'Cartes', 5, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zona`
--

CREATE TABLE IF NOT EXISTS `zona` (
  `IdZona` int(50) NOT NULL DEFAULT '0',
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `TotalPale` int(50) NOT NULL,
  `IdBodega` int(50) NOT NULL,
  `IdTipoAlmacenaje` int(50) NOT NULL,
  PRIMARY KEY (`IdZona`),
  KEY `fk_idBodegaZona` (`IdBodega`),
  KEY `fk_idTipoAlmacenaje` (`IdTipoAlmacenaje`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `zona`
--

INSERT INTO `zona` (`IdZona`, `Nombre`, `TotalPale`, `IdBodega`, `IdTipoAlmacenaje`) VALUES
(1, 'Zona Frio', 2, 1, 1),
(23, 'dsfdfsdfds', 45, 1, 1);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bandeja`
--
ALTER TABLE `bandeja`
  ADD CONSTRAINT `fk_idBandeja` FOREIGN KEY (`IdTarjeta`) REFERENCES `tarjetatrabajador` (`IdTarjeta`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_idTipoProducto` FOREIGN KEY (`IdTipoProducto`) REFERENCES `tipoproducto` (`IdTipoProducto`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `bodega`
--
ALTER TABLE `bodega`
  ADD CONSTRAINT `fk_idCiudad` FOREIGN KEY (`IdCiudad`) REFERENCES `ciudad` (`IdCiudad`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD CONSTRAINT `fk_idRegion` FOREIGN KEY (`IdRegion`) REFERENCES `region` (`IdRegion`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `controlbodega`
--
ALTER TABLE `controlbodega`
  ADD CONSTRAINT `fk_idcontrolcalidadc` FOREIGN KEY (`IdControl`) REFERENCES `controlcalidad` (`IdControl`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_iddespacho` FOREIGN KEY (`IdDespacho`) REFERENCES `despacho` (`IdDespacho`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_idzona` FOREIGN KEY (`IdZona`) REFERENCES `zona` (`IdZona`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `controlcalidad`
--
ALTER TABLE `controlcalidad`
  ADD CONSTRAINT `fk_idCalificacion` FOREIGN KEY (`IdCalificacion`) REFERENCES `calificacion` (`IdCalificacion`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_idestadoproducto` FOREIGN KEY (`IdEstadoProducto`) REFERENCES `estadoproducto` (`IdEstadoProducto`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `cuadrilla`
--
ALTER TABLE `cuadrilla`
  ADD CONSTRAINT `fk_idHuerto` FOREIGN KEY (`IdHuerto`) REFERENCES `huerto` (`IdHuerto`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `despacho`
--
ALTER TABLE `despacho`
  ADD CONSTRAINT `fk_cuadrilla` FOREIGN KEY (`IdCuadrilla`) REFERENCES `cuadrilla` (`IdCuadrilla`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_idcontrolcalidad` FOREIGN KEY (`IdControl`) REFERENCES `controlcalidad` (`IdControl`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_idTipoProductoGuia` FOREIGN KEY (`IdTipoProducto`) REFERENCES `tipoproducto` (`IdTipoProducto`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `detalle_cuadrilla`
--
ALTER TABLE `detalle_cuadrilla`
  ADD CONSTRAINT `fk_idcuadrilla` FOREIGN KEY (`IdCuadrilla`) REFERENCES `cuadrilla` (`IdCuadrilla`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_idtarjeta` FOREIGN KEY (`IdTarjeta`) REFERENCES `tarjetatrabajador` (`IdTarjeta`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `fundo`
--
ALTER TABLE `fundo`
  ADD CONSTRAINT `fk_idCiudadfundo` FOREIGN KEY (`IdCiudad`) REFERENCES `ciudad` (`IdCiudad`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `huerto`
--
ALTER TABLE `huerto`
  ADD CONSTRAINT `fk_idPredio` FOREIGN KEY (`IdPredio`) REFERENCES `predio` (`IdPredio`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `predio`
--
ALTER TABLE `predio`
  ADD CONSTRAINT `fk_idfundo` FOREIGN KEY (`IdFundo`) REFERENCES `fundo` (`IdFundo`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `region`
--
ALTER TABLE `region`
  ADD CONSTRAINT `fk_idPais` FOREIGN KEY (`IdPais`) REFERENCES `pais` (`IdPais`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `tarjetatrabajador`
--
ALTER TABLE `tarjetatrabajador`
  ADD CONSTRAINT `fk_idRut` FOREIGN KEY (`Rut`) REFERENCES `trabajador` (`Rut`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
  ADD CONSTRAINT `fk_idProducto` FOREIGN KEY (`IdProducto`) REFERENCES `producto` (`IdProducto`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_idCargoUsuario` FOREIGN KEY (`IdCargo`) REFERENCES `cargo` (`IdCargo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_idPerfil` FOREIGN KEY (`IdPerfil`) REFERENCES `perfil` (`IdPerfil`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `zona`
--
ALTER TABLE `zona`
  ADD CONSTRAINT `fk_idBodegaZona` FOREIGN KEY (`IdBodega`) REFERENCES `bodega` (`IdBodega`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_idTipoAlmacenaje` FOREIGN KEY (`IdTipoAlmacenaje`) REFERENCES `tipoalmacenaje` (`IdTipoAlmacenaje`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

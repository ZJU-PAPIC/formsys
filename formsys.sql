# Host: localhost  (Version: 5.5.53)
# Date: 2019-03-14 21:39:18
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "formlist"
#

DROP TABLE IF EXISTS `formlist`;
CREATE TABLE `formlist` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `formkey` varchar(255) DEFAULT NULL,
  `formstr` text,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "formlist"
#

/*!40000 ALTER TABLE `formlist` DISABLE KEYS */;
INSERT INTO `formlist` VALUES (1,'f1552570478572',NULL),(2,'f1552570536050',NULL);
/*!40000 ALTER TABLE `formlist` ENABLE KEYS */;

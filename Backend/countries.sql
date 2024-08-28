USE `onlineshop`;

SET foreign_key_checks = 0;

-- Table structure for table `country`

DROP TABLE IF EXISTS `country`;

CREATE TABLE `country` (
  `id` smallint unsigned NOT NULL,
  `code` varchar(2) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- Data for table `country`

INSERT INTO `country` VALUES 
(1, 'RO', 'Romania'),
(2, 'US','United States'),
(3, 'DE','Germany');

-- Table structure for table `county`

DROP TABLE IF EXISTS `county`;

CREATE TABLE `county` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `country_id` smallint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_country` (`country_id`),
  CONSTRAINT `fk_country` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;


-- Dumping data for table `county`

INSERT INTO `county` VALUES 
(1, 'Alba', 1),
(2, 'Arad', 1),
(3, 'Argeș', 1),
(4, 'Bacău', 1),
(5, 'Bihor', 1),
(6, 'Bistrița-Năsăud', 1),
(7, 'Botoșani', 1),
(8, 'Brăila', 1),
(9, 'Brașov', 1),
(10, 'Buzău', 1),
(11, 'Călărași', 1),
(12, 'Caraș-Severin', 1),
(13, 'Cluj', 1),
(14, 'Constanța', 1),
(15, 'Covasna', 1),
(16, 'Dâmbovița', 1),
(17, 'Dolj', 1),
(18, 'Galați', 1),
(19, 'Giurgiu', 1),
(20, 'Gorj', 1),
(21, 'Harghita', 1),
(22, 'Hunedoara', 1),
(23, 'Ialomița', 1),
(24, 'Iași', 1),
(25, 'Ilfov', 1),
(26, 'Maramureș', 1),
(27, 'Mehedinți', 1),
(28, 'Mureș', 1),
(29, 'Neamț', 1),
(30, 'Olt', 1),
(31, 'Prahova', 1),
(32, 'Sălaj', 1),
(33, 'Satu Mare', 1),
(34, 'Sibiu', 1),
(35, 'Suceava', 1),
(36, 'Teleorman', 1),
(37, 'Timiș', 1),
(38, 'Tulcea', 1),
(39, 'Vâlcea', 1),
(40, 'Vaslui', 1),
(41, 'Vrancea', 1),
(43, 'Alabama', 2),
(44, 'Alaska', 2),
(45, 'Arizona', 2),
(46, 'Arkansas', 2),
(47, 'California', 2),
(48, 'Colorado', 2),
(49, 'Connecticut', 2),
(50, 'Delaware', 2),
(51, 'Florida', 2),
(52, 'Georgia', 2),
(53, 'Hawaii', 2),
(54, 'Idaho', 2),
(55, 'Illinois', 2),
(56, 'Indiana', 2),
(57, 'Iowa', 2),
(58, 'Kansas', 2),
(59, 'Kentucky', 2),
(60, 'Louisiana', 2),
(61, 'Maine', 2),
(62, 'Maryland', 2),
(63, 'Massachusetts', 2),
(64, 'Michigan', 2),
(65, 'Minnesota', 2),
(66, 'Mississippi', 2),
(67, 'Missouri', 2),
(68, 'Montana', 2),
(69, 'Nebraska', 2),
(70, 'Nevada', 2),
(71, 'New Hampshire', 2),
(72, 'New Jersey', 2),
(73, 'New Mexico', 2),
(74, 'New York', 2),
(75, 'North Carolina', 2),
(76, 'North Dakota', 2),
(77, 'Ohio', 2),
(78, 'Oklahoma', 2),
(79, 'Oregon', 2),
(80, 'Pennsylvania', 2),
(81, 'Rhode Island', 2),
(82, 'South Carolina', 2),
(83, 'South Dakota', 2),
(84, 'Tennessee', 2),
(85, 'Texas', 2),
(86, 'Utah', 2),
(87, 'Vermont', 2),
(88, 'Virginia', 2),
(89, 'Washington', 2),
(90, 'West Virginia', 2),
(91, 'Wisconsin', 2),
(92, 'Wyoming', 2),
(93, 'District of Columbia', 2),
(94, 'Baden-Württemberg', 3),
(95, 'Bavaria', 3),
(96, 'Berlin', 3),
(97, 'Brandenburg', 3),
(98, 'Bremen', 3),
(99, 'Hamburg', 3),
(100, 'Hesse', 3),
(101, 'Lower Saxony', 3),
(102, 'Mecklenburg-Vorpommern', 3),
(103, 'North Rhine-Westphalia', 3),
(104, 'Rhineland-Palatinate', 3),
(105, 'Saarland', 3),
(106, 'Saxony', 3),
(107, 'Saxony-Anhalt', 3),
(108, 'Schleswig-Holstein', 3),
(109, 'Thuringia', 3);


SET foreign_key_checks = 1;
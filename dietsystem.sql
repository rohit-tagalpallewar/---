-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2020 at 07:24 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dietsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `hs_evening_grain`
--

CREATE TABLE `hs_evening_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hs_evening_grain`
--

INSERT INTO `hs_evening_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-25', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-19', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-03', 0.7, 0.2, 0, 0, 0, 0, 0.2, 2, 0.02, 0, 0, 0.02, 0.03, 0.05, 0, 0.07, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.02, 0.03, 0);

-- --------------------------------------------------------

--
-- Table structure for table `hs_first_remaining_grain`
--

CREATE TABLE `hs_first_remaining_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hs_first_remaining_grain`
--

INSERT INTO `hs_first_remaining_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-25', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-19', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-03', 100, 20, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `hs_income_grain`
--

CREATE TABLE `hs_income_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hs_income_grain`
--

INSERT INTO `hs_income_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-25', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-19', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-03', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `hs_monthly_report`
--

CREATE TABLE `hs_monthly_report` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `grainId` int(11) NOT NULL,
  `grainName` varchar(55) NOT NULL,
  `oneToFiveClassTotal` int(11) NOT NULL,
  `sixToSevenClassTotal` int(11) NOT NULL,
  `oneToSevenClassTotal` int(11) NOT NULL,
  `oneToFiveClassAvg` float NOT NULL,
  `sixToSevenClassAvg` float NOT NULL,
  `oneToSevenClassAvg` float NOT NULL,
  `grindingCost` float NOT NULL,
  `totalDaal` float NOT NULL,
  `totalMasala` float NOT NULL,
  `totalCondiment` float NOT NULL,
  `totalBounce` float NOT NULL,
  `hygieneMaterials` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hs_morning_grain`
--

CREATE TABLE `hs_morning_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hs_morning_grain`
--

INSERT INTO `hs_morning_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-25', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-19', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-03', 0.35, 0.1, 0, 0, 0.1, 0, 0, 1, 0.01, 0, 0, 0.01, 0.01, 0.03, 0.02, 0.04, 0, 0, 0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13, 0, 0.01, 0.02, 0);

-- --------------------------------------------------------

--
-- Table structure for table `hs_remaining_grain`
--

CREATE TABLE `hs_remaining_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hs_remaining_grain`
--

INSERT INTO `hs_remaining_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-25', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-19', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-03', 98.95, 19.7, 10, 10, -0.1, 0, -0.2, -3, -0.03, 0, 0, -0.03, -0.04, -0.08, -0.02, -0.11, 0, 0, -0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.13, 0, -0.03, -0.05, 0);

-- --------------------------------------------------------

--
-- Table structure for table `hs_remaining_income_total`
--

CREATE TABLE `hs_remaining_income_total` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hs_remaining_income_total`
--

INSERT INTO `hs_remaining_income_total` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-25', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-19', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-03', 100, 20, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `hs_total_grain`
--

CREATE TABLE `hs_total_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `day` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hs_total_grain`
--

INSERT INTO `hs_total_grain` (`year`, `month`, `date`, `day`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-25', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-19', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-03', '', 1.05, 0.3, 0, 0, 0.1, 0, 0.2, 3, 0.03, 0, 0, 0.03, 0.04, 0.08, 0.02, 0.11, 0, 0, 0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13, 0, 0.03, 0.05, 0);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `UserId` float NOT NULL,
  `UserName` varchar(55) NOT NULL,
  `Password` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`UserId`, `UserName`, `Password`) VALUES
(1, 'jayu', 'jayu'),
(2, 'jayudeore', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `pr_evening_grain`
--

CREATE TABLE `pr_evening_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pr_evening_grain`
--

INSERT INTO `pr_evening_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-12', 0.3, 0.1, 0, 0.1, 0, 0, 0, 1, 0.01, 0, 0, 0.01, 0.01, 0.03, 0, 0.04, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.01, 0.02, 0),
('2001', 'January', '2020-06-13', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-14', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `pr_first_remaining_grain`
--

CREATE TABLE `pr_first_remaining_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pr_first_remaining_grain`
--

INSERT INTO `pr_first_remaining_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-12', 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-13', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-14', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `pr_income_grain`
--

CREATE TABLE `pr_income_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pr_income_grain`
--

INSERT INTO `pr_income_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-12', 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-13', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-14', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `pr_monthly_report`
--

CREATE TABLE `pr_monthly_report` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `grainId` int(11) NOT NULL,
  `grainName` varchar(55) NOT NULL,
  `oneToFiveClassTotal` int(11) NOT NULL,
  `sixToSevenClassTotal` int(11) NOT NULL,
  `oneToSevenClassTotal` int(11) NOT NULL,
  `oneToFiveClassAvg` float NOT NULL,
  `sixToSevenClassAvg` float NOT NULL,
  `oneToSevenClassAvg` float NOT NULL,
  `grindingCost` float NOT NULL,
  `totalDaal` float NOT NULL,
  `totalMasala` float NOT NULL,
  `totalCondiment` float NOT NULL,
  `totalBounce` float NOT NULL,
  `hygieneMaterials` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pr_morning_grain`
--

CREATE TABLE `pr_morning_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pr_morning_grain`
--

INSERT INTO `pr_morning_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-12', 1, 0.4, 0.4, 0, 0, 0, 0, 4, 0.04, 0, 0, 0.03, 0.06, 0.1, 0.08, 0.14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0, 0.04, 0.06, 0),
('2001', 'January', '2020-06-13', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-14', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `pr_remaining_grain`
--

CREATE TABLE `pr_remaining_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pr_remaining_grain`
--

INSERT INTO `pr_remaining_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-12', 118.7, -0.5, -0.1, 0, -0.1, 0, 0, -5, -0.05, 0, 0, -0.04, -0.07, -0.13, -0.08, -0.18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.3, 0, -0.05, -0.08, 0),
('2001', 'January', '2020-06-13', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-14', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `pr_remaining_income_total`
--

CREATE TABLE `pr_remaining_income_total` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pr_remaining_income_total`
--

INSERT INTO `pr_remaining_income_total` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-12', 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-13', 118.7, -0.5, -0.1, 0, -0.1, 0, 0, -5, -0.05, 0, 0, -0.04, -0.07, -0.13, -0.08, -0.18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.3, 0, -0.05, -0.08, 0),
('2001', 'January', '2020-06-14', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `pr_total_grain`
--

CREATE TABLE `pr_total_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `day` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pr_total_grain`
--

INSERT INTO `pr_total_grain` (`year`, `month`, `date`, `day`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-12', '', 1.3, 0.5, 0.1, 0, 0.1, 0, 0, 5, 0.05, 0, 0, 0.04, 0.07, 0.13, 0.08, 0.18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0, 0.05, 0.08, 0),
('2001', 'January', '2020-06-13', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-14', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sec_evening_grain`
--

CREATE TABLE `sec_evening_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sec_evening_grain`
--

INSERT INTO `sec_evening_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-19', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-18', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-20', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sec_first_remaining_grain`
--

CREATE TABLE `sec_first_remaining_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sec_first_remaining_grain`
--

INSERT INTO `sec_first_remaining_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-19', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-18', 100, 200, 20, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-20', -0.3, -0.1, -0.1, 0, 0, 0, 0, -1, -0.01, 0, 0, -0.01, -0.01, -0.03, -0.02, -0.04, -0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.13, 0, -0.01, -0.02, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sec_income_grain`
--

CREATE TABLE `sec_income_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sec_income_grain`
--

INSERT INTO `sec_income_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-19', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-18', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-20', 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sec_monthly_report`
--

CREATE TABLE `sec_monthly_report` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `grainId` int(11) NOT NULL,
  `grainName` varchar(55) NOT NULL,
  `oneToFiveClassTotal` int(11) NOT NULL,
  `sixToSevenClassTotal` int(11) NOT NULL,
  `oneToSevenClassTotal` int(11) NOT NULL,
  `oneToFiveClassAvg` float NOT NULL,
  `sixToSevenClassAvg` float NOT NULL,
  `oneToSevenClassAvg` float NOT NULL,
  `grindingCost` float NOT NULL,
  `totalDaal` float NOT NULL,
  `totalMasala` float NOT NULL,
  `totalCondiment` float NOT NULL,
  `totalBounce` float NOT NULL,
  `hygieneMaterials` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sec_morning_grain`
--

CREATE TABLE `sec_morning_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sec_morning_grain`
--

INSERT INTO `sec_morning_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-19', 0.3, 0.1, 0.1, 0, 0, 0, 0, 1, 0.01, 0, 0, 0.01, 0.01, 0.03, 0.02, 0.04, 0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13, 0, 0.01, 0.02, 0),
('2001', 'January', '2020-06-18', 0.3, 0.1, 0, 0, 0.1, 0, 0, 1, 0.01, 0, 0, 0.01, 0.01, 0.03, 0.02, 0.04, 0, 0, 0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13, 0, 0.01, 0.02, 0),
('2001', 'January', '2020-06-20', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sec_remaining_grain`
--

CREATE TABLE `sec_remaining_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sec_remaining_grain`
--

INSERT INTO `sec_remaining_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-19', -0.3, -0.1, -0.1, 0, 0, 0, 0, -1, -0.01, 0, 0, -0.01, -0.01, -0.03, -0.02, -0.04, -0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.13, 0, -0.01, -0.02, 0),
('2001', 'January', '2020-06-18', 99.7, 199.9, 20, 10, 9.9, 0, 0, -1, -0.01, 0, 0, -0.01, -0.01, -0.03, -0.02, -0.04, 0, 0, -0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.13, 0, -0.01, -0.02, 0),
('2001', 'January', '2020-06-20', 99.7, -0.1, -0.1, 0, 0, 0, 0, -1, -0.01, 0, 0, -0.01, -0.01, -0.03, -0.02, -0.04, -0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.13, 0, -0.01, -0.02, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sec_remaining_income_total`
--

CREATE TABLE `sec_remaining_income_total` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sec_remaining_income_total`
--

INSERT INTO `sec_remaining_income_total` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-19', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-18', 100, 200, 20, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-20', 99.7, -0.1, -0.1, 0, 0, 0, 0, -1, -0.01, 0, 0, -0.01, -0.01, -0.03, -0.02, -0.04, -0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.13, 0, -0.01, -0.02, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sec_total_grain`
--

CREATE TABLE `sec_total_grain` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `wheat` float NOT NULL,
  `rice` float NOT NULL,
  `mugDaal` float NOT NULL,
  `chnaDaal` float NOT NULL,
  `turDaal` float NOT NULL,
  `btbatiDaal` float NOT NULL,
  `ududDaal` float NOT NULL,
  `sarpan` float NOT NULL,
  `chiiliPowder` float NOT NULL,
  `turmeric` float NOT NULL,
  `cumin` float NOT NULL,
  `spice` float NOT NULL,
  `salt` float NOT NULL,
  `pinut` float NOT NULL,
  `sugar` float NOT NULL,
  `fa_oil` float NOT NULL,
  `matki` float NOT NULL,
  `barbiti` float NOT NULL,
  `chna` float NOT NULL,
  `clothSoap` float NOT NULL,
  `BeathSoap` float NOT NULL,
  `coconutOil` float NOT NULL,
  `majan` float NOT NULL,
  `eggs` float NOT NULL,
  `fruits` float NOT NULL,
  `mutton` float NOT NULL,
  `fist` float NOT NULL,
  `milk` float NOT NULL,
  `vegitables1` float NOT NULL,
  `vegitables2` float NOT NULL,
  `garlic` float NOT NULL,
  `onion` float NOT NULL,
  `pohe` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sec_total_grain`
--

INSERT INTO `sec_total_grain` (`year`, `month`, `date`, `wheat`, `rice`, `mugDaal`, `chnaDaal`, `turDaal`, `btbatiDaal`, `ududDaal`, `sarpan`, `chiiliPowder`, `turmeric`, `cumin`, `spice`, `salt`, `pinut`, `sugar`, `fa_oil`, `matki`, `barbiti`, `chna`, `clothSoap`, `BeathSoap`, `coconutOil`, `majan`, `eggs`, `fruits`, `mutton`, `fist`, `milk`, `vegitables1`, `vegitables2`, `garlic`, `onion`, `pohe`) VALUES
('2001', 'January', '2020-06-19', 0.3, 0.1, 0.1, 0, 0, 0, 0, 1, 0.01, 0, 0, 0.01, 0.01, 0.03, 0.02, 0.04, 0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13, 0, 0.01, 0.02, 0),
('2001', 'January', '2020-06-18', 0.3, 0.1, 0, 0, 0.1, 0, 0, 1, 0.01, 0, 0, 0.01, 0.01, 0.03, 0.02, 0.04, 0, 0, 0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13, 0, 0.01, 0.02, 0),
('2001', 'January', '2020-06-20', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `students_higher_secondary`
--

CREATE TABLE `students_higher_secondary` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `attendence` int(11) NOT NULL,
  `classElevenPresent` int(11) NOT NULL,
  `classTwelvePresent` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students_higher_secondary`
--

INSERT INTO `students_higher_secondary` (`year`, `month`, `date`, `attendence`, `classElevenPresent`, `classTwelvePresent`, `total`) VALUES
('2001', 'January', '2020-06-19', 0, 0, 0, 0),
('2001', 'January', '2020-06-03', 0, 1, 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `students_primary`
--

CREATE TABLE `students_primary` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `attendence` int(11) NOT NULL,
  `classOneToFivePresent` int(11) NOT NULL,
  `classSixToSevenPresent` int(11) NOT NULL,
  `classOneToSevenPresent` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students_primary`
--

INSERT INTO `students_primary` (`year`, `month`, `date`, `attendence`, `classOneToFivePresent`, `classSixToSevenPresent`, `classOneToSevenPresent`, `total`) VALUES
('2001', 'January', '2020-06-12', 0, 4, 1, 0, 5),
('2001', 'January', '2020-06-13', 0, 0, 0, 0, 0),
('2001', 'January', '2020-06-14', 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `students_secondary`
--

CREATE TABLE `students_secondary` (
  `year` varchar(55) NOT NULL,
  `month` varchar(55) NOT NULL,
  `date` varchar(55) NOT NULL,
  `attendence` int(11) NOT NULL,
  `classEightPresent` int(11) NOT NULL,
  `classNineToTenPresent` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students_secondary`
--

INSERT INTO `students_secondary` (`year`, `month`, `date`, `attendence`, `classEightPresent`, `classNineToTenPresent`, `total`) VALUES
('2001', 'January', '2020-06-19', 0, 0, 0, 1),
('2001', 'January', '2020-06-18', 0, 1, 0, 1),
('2001', 'January', '2020-06-20', 0, 0, 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 09, 2018 at 08:02 PM
-- Server version: 5.6.38-log
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gusnand1_mobile`
--

-- --------------------------------------------------------

--
-- Table structure for table `whidiharta`
--

CREATE TABLE `whidiharta` (
  `id` int(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `umur` int(50) NOT NULL,
  `alamat` varchar(50) NOT NULL,
  `laporan` varchar(50) NOT NULL,
  `tanggal` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `whidiharta`
--

INSERT INTO `whidiharta` (`id`, `nama`, `umur`, `alamat`, `laporan`, `tanggal`) VALUES
(1, 'Whidi', 10, 'Jalan xxx', 'ada musibah', '2018-04-08 10:51:45'),
(2, 'Dodik', 6, 'Jalan abc', 'putus cinta', '2018-04-08 10:52:25'),
(4, '', 0, '', '', '2018-04-08 13:43:22'),
(5, 'Hus', 21, 'Hsjh', 'Hsbvshjz', '2018-04-08 14:03:15'),
(6, '', 0, '', '', '2018-04-08 14:08:01'),
(7, 'wgwg', 10, 'ww', 'kaka', '2018-04-08 14:21:29'),
(8, 'kaka', 0, 'dede', 'cece', '2018-04-08 14:22:40'),
(9, '', 0, '', '', '2018-04-08 14:34:44'),
(10, '', 0, '', '', '2018-04-08 14:39:32'),
(11, '', 0, '', '', '2018-04-08 14:59:29'),
(12, 'aiaia', 19, 'aahah', 'hahahhaha', '2018-04-08 14:59:39'),
(13, '', 0, '', '', '2018-04-08 15:09:34'),
(14, '', 0, '', '', '2018-04-08 15:22:10'),
(15, '', 0, '', '', '2018-04-08 15:24:03'),
(16, '', 0, '', '', '2018-04-08 15:28:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `whidiharta`
--
ALTER TABLE `whidiharta`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `whidiharta`
--
ALTER TABLE `whidiharta`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

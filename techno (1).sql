-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2021 at 03:49 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `techno`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(32) NOT NULL,
  `detailsid` int(32) NOT NULL,
  `postid` int(32) NOT NULL,
  `contents` longtext NOT NULL,
  `createdBy` int(32) NOT NULL,
  `createdAt` datetime NOT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `detailsid`, `postid`, `contents`, `createdBy`, `createdAt`, `status`) VALUES
(1, 2, 1, 'user2 comment on post 1', 2, '2021-07-14 09:25:47', 'active'),
(2, 4, 1, 'user 4 comment on post 1', 4, '2021-07-14 09:27:32', 'active'),
(3, 4, 4, 'usrer 4 comment on post 4', 4, '2021-07-14 09:29:02', 'active'),
(4, 2, 30, 'new posts2000', 2, '2021-07-23 10:40:03', 'active'),
(5, 2, 0, 'qwdasd', 2, '2021-07-23 10:50:39', 'active'),
(6, 2, 1, 'asdad', 2, '2021-07-23 10:51:17', 'active'),
(7, 2, 1, 'adcdf', 2, '2021-07-23 10:51:29', 'active'),
(8, 2, 1, 'axsdsd', 2, '2021-07-23 10:51:45', 'active'),
(9, 2, 1, 'sdsdfs', 2, '2021-07-23 10:51:48', 'active'),
(10, 2, 0, 'ergergre', 2, '2021-07-24 20:10:53', 'active'),
(11, 2, 0, 'ewfefdfe', 2, '2021-07-24 20:11:27', 'active'),
(12, 2, 0, 'ewfefdfe', 2, '2021-07-24 20:11:32', 'active'),
(13, 2, 1, 'sefe', 2, '2021-07-24 20:14:52', 'active'),
(14, 2, 1, 'qeaef', 2, '2021-07-24 20:15:03', 'active'),
(15, 2, 1, 'sexe', 2, '2021-07-24 20:15:11', 'active'),
(16, 2, 1, 'I am very good boy', 2, '2021-07-24 20:19:22', 'active'),
(17, 2, 4, '', 2, '2021-07-27 17:36:33', 'active'),
(18, 7, 36, 'can u give your number', 7, '2021-08-01 15:49:30', 'active'),
(19, 7, 1, 'sds', 7, '2021-08-01 15:49:43', 'active'),
(20, 7, 1, 'asdsd', 7, '2021-08-01 15:50:02', 'active'),
(21, 7, 1, 'ass', 7, '2021-08-01 15:50:37', 'active'),
(22, 7, 1, 'hii i am very good girl', 7, '2021-08-01 15:51:26', 'active'),
(23, 7, 1, 'can you give me your number', 7, '2021-08-01 15:52:49', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `details`
--

CREATE TABLE `details` (
  `id` int(32) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `details`
--

INSERT INTO `details` (`id`, `name`, `email`, `password`, `contact`) VALUES
(2, 'Aakash Dey', 'qewerer@gmail.com', '567', '147258'),
(4, 'robin', 'robin@gmail.com', '123', '14258369'),
(7, 'Sneha Das', 'snehadas@gmail.com', '366', '2588796365');

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `friends` (
  `id` int(11) NOT NULL,
  `fromuserid` int(11) NOT NULL,
  `touserid` int(11) NOT NULL,
  `senderstatus` enum('true','false') NOT NULL DEFAULT 'true',
  `receiverstatus` enum('true','false') NOT NULL DEFAULT 'false',
  `createdAt` datetime NOT NULL,
  `createdby` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`id`, `fromuserid`, `touserid`, `senderstatus`, `receiverstatus`, `createdAt`, `createdby`) VALUES
(7, 4, 7, 'true', 'true', '2021-08-14 20:45:46', 4),
(8, 7, 2, 'true', 'true', '2021-08-19 09:34:02', 7);

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(20) NOT NULL,
  `detailsid` int(32) NOT NULL,
  `postid` int(100) NOT NULL,
  `createdat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`id`, `detailsid`, `postid`, `createdat`) VALUES
(52, 4, 4, '2021-07-27 18:28:06'),
(74, 2, 23, '2021-07-28 10:34:03'),
(82, 2, 28, '2021-07-29 08:57:13'),
(85, 2, 35, '2021-07-29 08:57:30'),
(86, 2, 2, '2021-07-29 08:57:41'),
(87, 2, 4, '2021-07-29 08:57:49'),
(89, 2, 1, '2021-07-29 09:05:20'),
(91, 7, 36, '2021-08-01 15:49:09');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(32) NOT NULL,
  `fromuserid` int(32) NOT NULL,
  `touserid` int(32) NOT NULL,
  `text` longtext NOT NULL,
  `createdAt` datetime NOT NULL,
  `createdby` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `fromuserid`, `touserid`, `text`, `createdAt`, `createdby`) VALUES
(1, 2, 4, 'hii', '2021-07-31 16:58:41', 2),
(2, 4, 2, 'hii', '2021-08-01 17:23:25', 4),
(3, 2, 4, 'hii i am aakash', '2021-08-02 17:41:25', 2),
(4, 2, 4, 'fuu', '2021-08-02 17:51:04', 2),
(5, 4, 2, 'efgeger', '2021-08-02 17:51:10', 4),
(6, 2, 4, 'dafdfd', '2021-08-02 17:55:11', 2),
(7, 4, 2, 'sfgdfg', '2021-08-02 17:55:14', 4);

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(32) NOT NULL,
  `detailsid` int(32) NOT NULL,
  `contents` longtext NOT NULL,
  `createdby` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `detailsid`, `contents`, `createdby`, `createdAt`, `status`) VALUES
(1, 2, '1st comment', 2, '2021-07-12 10:59:43', 'active'),
(2, 4, '2nd comment', 4, '2021-07-12 14:42:56', 'active'),
(3, 4, 'captain amarica', 4, '2021-07-12 15:21:43', 'active'),
(4, 2, 'i am number 2', 2, '2021-07-13 17:58:33', 'active'),
(5, 2, 'iron man', 2, '2021-07-19 09:41:20', 'active'),
(23, 4, 'hellow i am robin', 4, '2021-07-19 11:43:04', 'active'),
(28, 2, 'Aakash dey i am a pro gamer', 2, '2021-07-19 11:55:40', 'active'),
(29, 2, 'hellow robin i am Aakash', 2, '2021-07-19 11:56:25', 'active'),
(30, 2, 'qwes', 2, '2021-07-19 20:21:25', 'active'),
(31, 2, 'Hii , am i talk to you', 2, '2021-07-19 20:22:15', 'active'),
(34, 2, 'hii , jarvis\n', 2, '2021-07-20 21:12:07', 'active'),
(35, 2, 'this is new posts\n', 2, '2021-07-23 10:43:03', 'active'),
(36, 7, 'Hii i am sneha', 7, '2021-08-01 15:48:59', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `details`
--
ALTER TABLE `details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `details`
--
ALTER TABLE `details`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

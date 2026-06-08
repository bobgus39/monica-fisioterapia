-- Schema para Centro de Fisioterapia Mónica Sánchez
CREATE DATABASE IF NOT EXISTS monica_fisioterapia CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE monica_fisioterapia;

CREATE TABLE IF NOT EXISTS citas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  telefono VARCHAR(30) NOT NULL,
  email VARCHAR(150) NOT NULL,
  servicio VARCHAR(200) NOT NULL,
  fecha_preferida DATE,
  mensaje TEXT,
  estado ENUM('pendiente', 'confirmada', 'cancelada') DEFAULT 'pendiente',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_estado (estado),
  INDEX idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

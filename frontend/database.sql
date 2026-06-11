-- =====================================
-- YRK Full Stack Task
-- Database: PostgreSQL
-- =====================================


-- USERS TABLE
-- Stores registered users

CREATE TABLE users (

    id SERIAL PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(100) UNIQUE NOT NULL,

    password TEXT,

    auth_provider VARCHAR(50) DEFAULT 'local',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



-- HOME PAGE CONTENT TABLE
-- Dynamic website content managed by admin

CREATE TABLE homepage (

    id SERIAL PRIMARY KEY,

    title VARCHAR(150) NOT NULL,

    description TEXT,

    image TEXT,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



-- CONTACT FORM TABLE
-- Stores customer/user enquiries

CREATE TABLE contacts (

    id SERIAL PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(100) NOT NULL,

    subject VARCHAR(150),

    message TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



-- DEFAULT HOME DATA

INSERT INTO homepage
(
title,
description,
image
)

VALUES
(

'Welcome to YRK',

'This is a dynamic website powered by Next.js, Node.js and PostgreSQL',

'https://picsum.photos/600'

);
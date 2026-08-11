import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

// Connection Pooling
export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: 3307,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import employeeRoutes from './src/routes/employeeRoutes.js';

const app = express();
app.use(express.json());

// Tell Express to use the employee routes for any path starting with /employees
app.use('/employees', employeeRoutes);

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`\n🧂 PICK 'n STEAL MVC API is running on http://localhost:${PORT}`);
});
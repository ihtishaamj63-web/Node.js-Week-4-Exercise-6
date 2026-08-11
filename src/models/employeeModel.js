import { pool } from '../config/database.js';

// a. Get all employees
export const getAllEmployees = async () => {
    const [rows] = await pool.execute('SELECT * FROM employees');
    return rows;
};

// b. Get single employee by ID
export const getEmployeeById = async (id) => {
    const [rows] = await pool.execute('SELECT * FROM employees WHERE employee_id = ?', [id]);
    return rows;
};

// c. Insert new employee
export const insertEmployee = async (data) => {
    // Matches your exact table columns (department_id is now the foreign key)
    const sql = 'INSERT INTO employees (first_name, last_name, email, phone_number, salary, department_id) VALUES (?, ?, ?, ?, ?, ?)';
    await pool.execute(sql, [data.first_name, data.last_name, data.email, data.phone_number, data.salary, data.department_id]);
    return data;
};

// d. Delete employee by ID
export const deleteEmployeeById = async (id) => {
    await pool.execute('DELETE FROM employees WHERE employee_id = ?', [id]);
    return id;
};

// e. Remove ALL employees
export const deleteAllEmployees = async () => {
    await pool.execute('DELETE FROM employees');
};

// f. BONUS: Get employees in South Africa (Using JOIN based on your Workbench SQL)
export const getEmployeesInSouthAfrica = async () => {
    const sql = `
        SELECT employees.*, departments.department_name, departments.location 
        FROM employees 
        INNER JOIN departments ON employees.department_id = departments.department_id 
        WHERE departments.location = 'South Africa'
    `;
    const [rows] = await pool.execute(sql);
    return rows;
};
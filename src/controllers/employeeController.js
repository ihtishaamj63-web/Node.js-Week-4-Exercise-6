import * as EmployeeModel from '../models/employeeModel.js';

// a. Return all employees
export const getAll = async (req, res) => {
    try {
        const employees = await EmployeeModel.getAllEmployees();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// b. Return single employee
export const getOne = async (req, res) => {
    try {
        const employee = await EmployeeModel.getEmployeeById(req.params.id);
        if (employee.length === 0) return res.status(404).json({ message: "Employee not found" });
        res.json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// c. Insert new employee
export const create = async (req, res) => {
    try {
        const newEmployee = await EmployeeModel.insertEmployee(req.body);
        res.status(201).json({ message: "Employee created", employee: newEmployee });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// d. Delete single employee
export const deleteOne = async (req, res) => {
    try {
        const id = await EmployeeModel.deleteEmployeeById(req.params.id);
        res.json({ message: `Employee ${id} deleted` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// e. Remove ALL employees
export const deleteAll = async (req, res) => {
    try {
        await EmployeeModel.deleteAllEmployees();
        res.json({ message: "All employees removed" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// f. BONUS: South Africa crew
export const getSouthAfricanCrew = async (req, res) => {
    try {
        const crew = await EmployeeModel.getEmployeesInSouthAfrica();
        res.json(crew);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
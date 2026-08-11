import { Router } from 'express';
import * as EmployeeController from '../controllers/employeeController.js';

const router = Router();

// Standard CRUD
router.get('/', EmployeeController.getAll);
router.get('/south-africa', EmployeeController.getSouthAfricanCrew); // BONUS route must be before /:id
router.get('/:id', EmployeeController.getOne);
router.post('/', EmployeeController.create);
router.delete('/:id', EmployeeController.deleteOne);
router.delete('/', EmployeeController.deleteAll); // e. Remove all

export default router;
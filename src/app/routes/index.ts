import { Router } from 'express';

import { UserRoutes } from '../modules/user/user.route';
import { StudentsRoutes } from '../modules/students/stundents.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';

const router = Router();

const moduleRoutes = [
  { path: '/users', route: UserRoutes },
  { path: '/students', route: StudentsRoutes },
  { path: '/academic-semesters', route: AcademicSemesterRoutes }, 
  { path: '/academic-facuites', route: AcademicFacultyRoutes },
  { path: '/academic-departments', route: AcademicDepartmentRoutes }, 
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
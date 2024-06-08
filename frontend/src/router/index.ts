import { createBrowserRouter, RouteObject } from 'react-router-dom';
import {TeacherRoutes} from "../packages/Teacher/routes";

const systemRoutes: RouteObject[] = [];
systemRoutes.push(...TeacherRoutes)

export const router = createBrowserRouter(systemRoutes);

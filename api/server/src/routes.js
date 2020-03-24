import { Router } from 'express';

import AutorController from './app/controllers/AutorController';
import CategoriaController from './app/controllers/CategoriaController';

import validateAutorStore from './app/validators/AutorStore';
import validateCategoriaCreate from './app/validators/CategoriaCreate';

const routes = new Router();

routes.post('/autores', validateAutorStore, AutorController.store);

routes.post('/categoria', validateCategoriaCreate, CategoriaController.create);

export default routes;

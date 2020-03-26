import { Router } from 'express';

import AutorController from './app/controllers/AutorController';
import CategoriaController from './app/controllers/CategoriaController';

import validateAutorStore from './app/validators/AutorStore';
import validateCategoriaCreate from './app/validators/CategoriaCreate';
import validateNomeCategoria from './app/validators/CheckNomeCategoria';

const routes = new Router();

routes.post('/autores', validateAutorStore, AutorController.store);

routes.post(
  '/categoria',
  validateCategoriaCreate,
  validateNomeCategoria,
  CategoriaController.create
);

export default routes;

import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import AutorController from './app/controllers/AutorController';
import CategoriaController from './app/controllers/CategoriaController';
import LivroController from './app/controllers/LivroController';

import authMiddleware from './app/middlewares/auth';

import validateAutorStore from './app/validators/AutorStore';
import validateEmailAutor from './app/validators/CheckEmailAutor';
import validateCategoriaCreate from './app/validators/CategoriaCreate';
import validateNomeCategoria from './app/validators/CheckNomeCategoria';
import validateLivroCategoria from './app/validators/CheckLivros';
import validateLivroCreate from './app/validators/LivroCreate';

const routes = new Router();

routes.post('/sessions', SessionController.create);

routes.use(authMiddleware);

routes.post(
  '/autor',
  validateAutorStore,
  validateEmailAutor,
  AutorController.store
);

routes.get('/autores', AutorController.index);

routes.get('/categorias', CategoriaController.index);

routes.post(
  '/categoria',
  validateCategoriaCreate,
  validateNomeCategoria,
  CategoriaController.create
);

routes.post(
  '/livro',
  validateLivroCreate,
  validateLivroCategoria,
  LivroController.create
);
routes.get('/livros', LivroController.index);
routes.get('/livros/:id', LivroController.showById);

export default routes;

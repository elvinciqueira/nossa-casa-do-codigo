import { Router } from 'express';

import AutorController from './app/controllers/AutorController';

import validateAutorStore from './app/validators/AutorStore';

const routes = new Router();

routes.post('/autores', validateAutorStore, AutorController.store);

export default routes;

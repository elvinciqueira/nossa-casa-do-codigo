import { Router } from 'express';

import AutorController from './app/controllers/AutorController';

const routes = new Router();

routes.post('/autores', AutorController.store);

export default routes;

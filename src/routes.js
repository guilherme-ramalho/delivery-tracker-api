import { Router } from 'express';

import OrderController from './app/controllers/OrderController';

const routes = new Router();

routes.get('/order', OrderController.select);

export default routes;

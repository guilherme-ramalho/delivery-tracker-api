import { Router } from 'express';

import OrderController from './app/controllers/OrderController';
import DeliveryController from './app/controllers/DevliveryController';

const routes = new Router();

routes.get('/order', OrderController.select);
routes.post('/order', OrderController.create);

routes.get('/delivery', DeliveryController.select);
routes.post('/delivery', DeliveryController.create);
routes.put('/delivery', DeliveryController.update);

export default routes;

import Order from '../models/Order';

class OrderController {
  async select(request, response) {
    try {
      const orders = Order.findAll();

      return response.json({ orders });
    } catch (error) {
      console.log(error);
      return response.json({ error });
    }
  }
}

export default new OrderController();

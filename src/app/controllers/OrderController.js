import Order from '../models/Order';

class OrderController {
  async select(request, response) {
    try {
      const orders = await Order.findAll();

      return response.json({ orders });
    } catch (error) {
      return response.json({ error: error.message });
    }
  }
}

export default new OrderController();

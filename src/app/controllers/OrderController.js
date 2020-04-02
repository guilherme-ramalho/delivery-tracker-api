import Order from '../models/Order';
import Delivery from '../models/Delivery';

class OrderController {
  async create(request, response) {
    try {
      const { description, lat, long } = request.body;

      const order = await Order.create({
        description,
      });

      const delivery = await Delivery.create({
        lat,
        long,
        orderId: order.id,
      });

      return response.json({
        order,
        delivery,
      });
    } catch (error) {
      return response.json({ error: error.message });
    }
  }

  async select(request, response) {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: Delivery,
            as: 'delivery',
          },
        ],
      });

      return response.json({ orders });
    } catch (error) {
      return response.json({ error: error.message });
    }
  }
}

export default new OrderController();

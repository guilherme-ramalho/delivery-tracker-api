import Delivery from '../models/Delivery';

class DeliveryController {
  async select(request, response) {
    const deliveries = await Delivery.findAll();

    return response.json({ deliveries });
  }

  async update(request, response) {
    try {
      const { id } = request.body;

      const delivery = await Delivery.findByPk(id);

      const updated = await delivery.update({
        ...delivery,
        ...request.body,
      });

      if (updated) {
        return response.json({ delivery: updated });
      }
      return response.json({ error: 'Couldnt update delivery' });
    } catch (error) {
      return response.json({ error: error.message });
    }
  }
}

export default new DeliveryController();

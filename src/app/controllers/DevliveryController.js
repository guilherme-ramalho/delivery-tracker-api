import Delivery from '../models/Delivery';

class DeliveryController {
  async select(request, response) {
    return response.json({ teste: 'teste' });
  }

  async create(request, response) {
    try {
      const delivery = await Delivery.create(request.body);

      return response.json({ delivery });
    } catch (error) {
      return response.json({ error: error.message });
    }
  }

  async update(request, response) {
    return response.json({ teste: 'teste' });
  }
}

export default new DeliveryController();

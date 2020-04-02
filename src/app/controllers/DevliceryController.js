class DeliveryController {
  async select(request, response) {
    return response.json({ teste: 'teste' });
  }
}

export default new DeliveryController();

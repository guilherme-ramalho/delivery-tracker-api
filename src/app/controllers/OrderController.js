class OrderController {
  async select(request, response) {
    return response.json({ teste: 'teste' });
  }
}

export default new OrderController();

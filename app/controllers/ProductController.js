
const productService = require("../services/ProductService");

class ProductController {
  async all(req, res) {
    const products = await productService.all();
    res.status(200).json({succes: true, products});
  }

  async one(req, res) {
    const { id } = req.params;

    const product = await productService.one({ id });
    res.status(200).json({succes: true, product});
  }

  async save(req, res) {
    const data = req.body;

    const product = await productService.save({ data });
    res.status(200).json({succes: true, product});
  }

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;

    const product = await productService.all({ id, data });
    res.status(200).json({succes: true, product});
  }

  async delete(req, res) {
    const { id } = req.params;

    const product = await productService.delete({ id });
    res.status(200).json({succes: true, product});
  }
}

module.exports = new ProductController();

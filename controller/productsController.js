const productService = require('../service/productsService');

const createProduct = async(req, res) => {
	const create =  await productService.createProduct(req.body);
	if (create.message) return res.status(create.code).json(create.message);
	res.status(201).json(create);
};

module.exports = {createProduct};
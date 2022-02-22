const productService = require('../service/productsService');

const createProduct = async(req, res) => {
	const create =  await productService.createProduct(req.body);
	if (create.message) return res.status(create.code).json(create.message);
	res.status(201).json(create);
};

const getProduct = async(req, res) => {
	const get = await productService.getProduct();
	return res.status(200).json(get);
};

const getProductById = async(req, res) => {
	const { _id } = req.params;
	const findId = await productService.getProductById(_id);
	if (findId.message) return res.status(findId.code).json(findId.message);
	return res.status(200).json(findId);
};

const deleteProduct = async (req, res) => {
	const { _id } = req.params;
	await productService.deleteProduct(_id);
	return res.status(204).send('deleta');
};

const editProduct = async(req, res) => {
	const { _id } = req.params;
	const { name, price, ingredients, image } = req.body;
	const edit = await productService.editProdut(_id, name, price, ingredients, image);
	return res.status(201).json(edit);
};

module.exports = { createProduct, getProduct, getProductById, deleteProduct, editProduct };
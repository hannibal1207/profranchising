const productsModel = require('../model/productsModel');

const verifyInputs = (name, price, ingredients) => {
	if (!name  || !price || !ingredients) {
		return {
			code: 400,
			message: 'Invalid entries. Try again.',
		};
	}
	if (typeof price !== 'number') {
		return {
			code: 400,
			message: '"price" must be a number'
		};
	}
	return {};
}; 

const createProduct = async({ name, price, ingredients, image }) => {
	const product = {
		name, 
		price, 
		ingredients,
		image
	};
	const verifica = verifyInputs(name, price, ingredients);
	if (verifica.message) return verifica; 
	const create = await productsModel.createProduct(product);
	return create;
};

const getProduct = async() => {
	const get = await productsModel.getProduct();
	return get;
};

const getProductById = async(_id) => {
	const findId = await productsModel.getProductById(_id);
	if (!findId) {
		return {
			code: 404,
			message: 'product not found'
		};
	}
	return findId;
};

const deleteProduct = async(_id) => {
	const deletee = await productsModel.deleteProduct(_id);
	return deletee;
};

const editProdut = async(_id, name, price, ingredients, image) => {
	const verifica = verifyInputs(name, price, ingredients);
	if (verifica.message) return verifica; 
	const edit = await productsModel.editProduct(_id, name, price, ingredients, image);
	return edit;
};

module.exports = { createProduct, getProduct, getProductById, deleteProduct, editProdut };
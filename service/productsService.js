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

module.exports = {createProduct};
const invetoryModel = require('../model/inventoryModel');

const verifyInputs = (ingredient, kg, price) => {
	if (!ingredient || !kg || !price) {
		return {
			code: 400,
			message: 'Invalid entries. Try again.',
		};
	}
	if (typeof price !== 'number' || typeof kg !== 'number') {
		return {
			code: 400,
			message: '"price or kg" must be a number'
		};
	}
	return {};
}; 

const createInvetory = async(ingredient,kg, price) => {
	const verifica = verifyInputs(ingredient, kg, price);
	if (verifica.message) return verifica; 
	const create = await invetoryModel.createInvetory(ingredient,kg,price);
	return create;
};

const getInvetory = async() => {
	const invetory = await invetoryModel.getInvetory();
	return invetory;
};

module.exports = { createInvetory, getInvetory };
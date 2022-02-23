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

const getInvetoryById = async(_id) => {
	const findId = await invetoryModel.getInvetoryById(_id);
	if (!findId) {
		return {
			code: 404,
			message: 'product not found'
		};
	}
	return findId;
};

const editInvetory = async(_id, ingredient, kg, price) => {
	const verifica = verifyInputs(ingredient, kg, price);
	if (verifica.message) return verifica; 
	const edit = await invetoryModel.editInvetory(_id, ingredient, kg, price);
	return edit;
};

const deleteInvetory = async(_id) => {
	const deletee = await invetoryModel.deleteInvetory(_id);
	return deletee;
};

module.exports = { createInvetory, getInvetory, getInvetoryById, editInvetory, deleteInvetory };
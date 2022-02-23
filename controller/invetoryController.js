const invetoryService = require('../service/InvetoryService');

const createInvetory = async(req, res) => {
	const { ingredient, kg, price } = req.body;
	const create = await invetoryService.createInvetory(ingredient, kg, price);
	if (create.message) return res.status(create.code).json(create.message);
	return res.status(201).json(create);
};

const getInvetory = async(req, res) => {
	const invetory = await invetoryService.getInvetory();
	return res.status(200).json(invetory);
};

const getInvetoryById = async(req, res) => {
	const { _id } = req.params;
	const findId = await invetoryService.getInvetoryById(_id);
	if (findId.message) return res.status(findId.code).json(findId.message);
	return res.status(200).json(findId);
};

const editInvetory = async(req, res) => {
	const { _id } = req.params;
	const { ingredient, kg, price } = req.body;
	const edit = await invetoryService.editInvetory(_id, ingredient, kg, price);
	return res.status(201).json(edit);
};

const deleteInvetory = async(req, res) => {
	const { _id } = req.params;
	await invetoryService.deleteInvetory(_id);
	return res.status(204).send('deleta');
};

module.exports = { createInvetory, getInvetory, getInvetoryById, editInvetory, deleteInvetory };
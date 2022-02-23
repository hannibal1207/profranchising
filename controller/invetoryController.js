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

module.exports = { createInvetory, getInvetory };
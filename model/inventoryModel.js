const connection = require('./connection');

const createInvetory = async(ingredient, kg, price) => {
	const db = await connection();
	const create = db.collection('invetory').insertOne({ ingredient, kg, price });
	return create;
};

const getInvetory = async() => {
	const db = await connection();
	const invetory = db.collection('invetory').find().toArray();
	return invetory;
};

module.exports = { createInvetory, getInvetory };
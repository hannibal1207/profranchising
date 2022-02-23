const connection = require('./connection');
const { ObjectId } = require('mongodb');

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

const getInvetoryById = async(_id) => {
	const db = await connection();
	const findById = db.collection('invetory').findOne(ObjectId(_id));
	return findById;
};

const editInvetory = async(_id, ingredient, kg, price) => {
	const db = await connection();
	const edit = db.collection('invetory').updateOne( { _id: ObjectId(_id) }, { $set: {ingredient, kg, price } } );
	return edit;
};

const deleteInvetory = async(_id) => {
	const db = await connection();
	const deletee = db.collection('invetory').deleteOne(
		{
			_id: ObjectId(_id) }
	);
	return deletee;
};

module.exports = { createInvetory, getInvetory, getInvetoryById, editInvetory, deleteInvetory };
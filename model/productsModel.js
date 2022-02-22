const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createProduct = async(product) => {
	const db = await connection();
	const create = db.collection('products').insertOne(product);
	return { _id: create.insertedId, product };
};

const getProduct = async() => {
	const db = await connection();
	const get = db.collection('products').find().toArray();
	return get;
};

const getProductById = async(_id) => {
	const db = await connection();
	const findById = db.collection('products').findOne(ObjectId(_id));
	return findById;
};

const deleteProduct = async(_id) => {
	const db = await connection();
	const deletee = db.collection('products').deleteOne(
		{
			_id: ObjectId(_id) }
	);
	return deletee;
};

const editProduct = async(_id, name, price, ingredients, image) => {
	const db = await connection();
	const edit = db.collection('products').updateOne( { _id: ObjectId(_id) }, { $set: {name, price, ingredients, image } } );
	return edit;
};

module.exports = { createProduct, getProduct, getProductById, deleteProduct, editProduct };

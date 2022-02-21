const connection = require('./connection');
const { ObjectId } = require('mongodb');

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

module.exports = {createProduct, getProduct, getProductById};

const connection = require('./connection');

const createProduct = async(product) => {
	const db = await connection();
	const create = db.collection('products').insertOne(product);
	return {_id: create.insertedId, product};
};

module.exports = {createProduct};

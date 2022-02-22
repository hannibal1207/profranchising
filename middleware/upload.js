const productModel = require('../model/productsModel');

const uploadMiddleware = async (req, res) => {
	const { _id } = req.params;
	const product = await productModel.getProductById(_id);
	res.status(200)
		.json({ ...product, image: `localhost:3000/uploads/${req.file.filename}`, userId: _id });
};

module.exports = {
	uploadMiddleware, 
}; 
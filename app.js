const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
const multer = require('multer');

const usersController = require('./controller/userController');
const loginController = require('./controller/loginController');
const productsController = require('./controller/productsController');
const auth = require('./middleware/auth');
const upload = require('./middleware/upload');

const app = express();
app.use(bodyParser.json());

const storage = multer.diskStorage({
	destination: (_req, _file, callback) => {
		callback(null, 'uploads');
	},
	filename: (req, _file, callback) => {
		const { _id } = req.params;
		callback(null, `${_id}.jpeg`);
	},
});

const uploadd = multer({ storage });
app.use('uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.post('/cadastro', usersController.createUSers);
app.post('/login', loginController.login);
app.post('/products', auth.validateJWT,  productsController.createProduct);
app.get('/products', productsController.getProduct);
app.get('/products/:_id', productsController.getProductById);
app.put('/products/:_id', auth.validateJWT, productsController.editProduct); 
app.delete('/products/:_id', auth.validateJWT, productsController.deleteProduct);
app.put('/products/:_id/image', auth.validateJWT, uploadd.single('image'), upload.uploadMiddleware);

app.listen(3000, () => console.log(`app rodando na porta ${3000}`));
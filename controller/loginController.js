const jwt = require('jsonwebtoken');
const loginService = require('../service/loginService');
require('dotenv').config();

const secret = process.env.SECRET_KEY;

const login = async (req, res) => {
	const { email, password } = req.body;

	const user = await loginService.login(email, password);

	const payload = {
		user,
	};
  
	const jwtConfig = {
		expiresIn: '7d',
		algorithm: 'HS256',
	};

	const token = jwt.sign(payload, secret, jwtConfig);

	if (user.message) return res.status(user.code).json({ message: user.message });
	res.status(200).json({ token });
};

module.exports = { login };

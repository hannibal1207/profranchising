const usersService = require('../service/userService');

const createUSers = async (req, res) => {
	const create = await usersService.createUSers(req.body);
	if (create.message) return res.status(create.code).json({ message: create.message });
	// eslint-disable-next-line no-unused-vars
	const { password: _, ...createInf } = create.user;
	res.status(201).json({ user: createInf });
};

module.exports = { createUSers };
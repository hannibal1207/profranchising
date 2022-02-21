const usersModel = require('../model/userModel');

const validEmail = (email) => {
	return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
};

const verificaCampos = (name, email, password) => {
	if (!name || !password) {
		return {
			code: 400,
			message: 'Invalid entries. Try again.',
		};
	}

	if (!validEmail(email)) {
		return {
			code: 400,
			message: 'invalid email'
		};
	}
    
	return {};
};
const createUSers = async ({ name, email, password }) => {
	const user = {
		name,
		email,
		password,
		role: 'user',
	};
  
	const verifica = verificaCampos(name, email, password);
	if (verifica.message) return verifica;
  
	if (await usersModel.findEmail(email)) {
		return {
			code: 409,
			message: 'Email already registered',       
		};
	}
  
	const create = await usersModel.createUsers(user);
    
	return create;
};
  
module.exports = { createUSers };
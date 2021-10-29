module.exports = {
	database:{
		host: process.env.HOST || 'localhost',
		user: process.env.USER_NAME || 'root',
		password: process.env.PASS || '1234',
		database: process.env.DB_NAME || 'prototipoBD'
	}
}
 
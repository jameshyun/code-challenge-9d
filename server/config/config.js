var env = process.env.NODE_ENV || 'development';

// Setting environment variables for Test and Development mode.
if (env === 'development' || env === 'test') {
	var config = require('./config.json');
	var envConfig = config[env];

	Object.keys(envConfig).forEach((key) => {
		process.env[key] = envConfig[key];
	});
}
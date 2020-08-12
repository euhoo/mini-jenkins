import express from 'express'
import deploy from './routes/deploy.js'
import basic from './routes/basic.js'
const app = express();

export default (port, api, serverStartFunc) => {
	// setup directory for files
	app.use(express.static('dist'));

	//setup routes
	app.use(`/${api}/deploy`, deploy);
	app.use(`/${api}/`, basic);

	//setup logging
	// app.use(logging);

	//setup errors - подключать последним use
	// app.use(errors);

	//listening port
	app.listen(port);
	serverStartFunc && serverStartFunc();
}

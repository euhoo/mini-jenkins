import server from './server.js';
import {appConfig} from '../config.js'

const {devOptions, api} = appConfig;
const {port} = devOptions;

const serverStartFunc = () => {
	console.log(`Server started at port: `, port);
};

server(port, api, serverStartFunc);

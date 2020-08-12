import express from "express";
import bodyParser from "body-parser";

const router = express.Router();

const jsonParser = bodyParser.json();
/* примеры*/
// POST request to delete BookInstance.
// router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_post);

// GET request to update BookInstance.
// router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_get);
/* конец примеров*/

router.post('/deploy', jsonParser, (request, response) => {
	const data = request.body;
	if(!data) return response.sendStatus(400);
	exec("bf 102", (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	});
});

export default router


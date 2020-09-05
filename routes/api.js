const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/patients', apiController.getAll);
router.get('/patients/:id', apiController.findId);
router.post('/patients', apiController.create);
router.put('/patients/:id', apiController.update);
router.delete('/patients/:id', apiController.delete);
module.exports = router;

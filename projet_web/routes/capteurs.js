var express = require('express');
var router = express.Router();
var capteur = require('../controllers/controleur');

/* GET one user */
//router.get('/:userId', user.findOne);

router.get('/', capteur.findAll);

/* DELETE  one user */
//router.delete('/:userId', user.delete);

/* update  one user */
//router.post('/:userId', user.update);

/* create  one user */
//router.put('/', user.create);


module.exports = router;
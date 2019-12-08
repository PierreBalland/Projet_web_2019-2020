var express = require('express');
var router = express.Router();
var Sensors = require('../controllers/controleur');

const app=express();
/* GET one user */
//router.get('/:userId', user.findOne);
/*

router.get('/', async (req, res) => {
    const user = await req.context.models.Sensors.findById(
        req.context.me.id,
    );
    return res.send(user);
});


router.get('/:userId', async (req, res) => {
    const user = await req.context.models.Sensors.findById(
        req.params._id,
    );
    return res.send(user);
});
*/
router.get('/:id', Sensors.findOne)

/* DELETE  one user */
//router.delete('/:userId', user.delete);

/* update  one user */
//router.post('/:userId', user.update);

/* create  one user */
//router.put('/', user.create);


module.exports = router;
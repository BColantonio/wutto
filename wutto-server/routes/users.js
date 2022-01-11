var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
    res.send({
        firstName: 'Brian',
        lastName: 'Colantonio',
        email: 'brianjc87@gmail.com',
        phone: '4012907766'
    })
})

module.exports = router;

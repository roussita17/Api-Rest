const express = require('express');
const router = express.Router();

/*'/' es la ruta inicial de nestro servidor*/ 
router.get('/', (req, res) => {
res.render('index');
});

router.post('/agregar', (req, res) => {
    console.log(req.body);
    res.send('received');
    });

module.exports = router;
const express = require('express');
const router = express.Router();


//Task tiene el schema de los datos
const Task = require('../models/task');


/*'/' es la ruta inicial de nestro servidor*/ 
router.get('/', async  (req, res) => {
    const tasks = await Task.find();
    //console.log(task);
    res.render('index',{
        tasks
    });
});

router.post('/agregar', async  (req, res) => {
    const task = new Task(req.body);
    await task.save();
    //console.log(new Task(req.body));
    //console.log(req.body);
    res.send('received');
    });

module.exports = router;
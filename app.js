const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

let tasks = [];

app.get('/todo', (req, res) => {
    res.send(tasks)
});

app.post('/todo', (req, res) => {
    const {task} = req.body;
    tasks.push({
        title: task,
        completed: false
    });

    console.log('add todo', req.body);
    res.send(tasks);
});

app.put('/todo', (req, res) => {
    const {task} = req.body;
    tasks = tasks.map(value => {
        return {
            ...value,
            completed: value.title === task ? !value.completed: value.completed
        }
    });

    res.send(tasks);
});

app.delete('/todo', (req, res) => {
    const {task} = req.body;
    tasks = tasks.filter(value => value.title !== task );

    res.send(tasks);
});

app.listen(3000, () => {
    console.log('app listening on port 3000')
});


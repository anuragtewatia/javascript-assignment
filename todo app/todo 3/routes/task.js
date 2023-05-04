import express from 'express';
import fs from 'fs';

const router = express.Router();
let tasks = JSON.parse(fs.readFileSync('tasks.json'));
console.log(tasks);

router.get('/', (req, res) => {
  console.log(tasks);
  res.send(tasks);
});

router.post('/', (req, res) => {
  const tsk = req.body.tasks;
  console.log('done');
  const obj={
    tasks: tsk
  }
  let tasks = JSON.parse(fs.readFileSync('tasks.json'));
  tasks.push(obj);

  fs.writeFileSync('tasks.json', JSON.stringify(tasks));
  res.send(`Added ${tsk.tasks} to the database`);
});

router.patch('/:tasks', (req, res) => {
  const { tasks } = req.params;
  const { taskss } = req.body;
  const foundTask = tasks.find((item) => item.tasks === tasks);
  foundTask.tasks = taskss;
  fs.writeFileSync('./../tasks.json', JSON.stringify(tasks));
  res.send(`updated task ${tasks}`);
});

router.delete('/:tasks', (req, res) => {
  const { tasks } = req.params;
  console.log(1, req.params);
  tasks = tasks.filter((task) => task.tasks !== tasks);
  fs.writeFileSync('tasks.json', JSON.stringify(tasks));
  res.send(`Task ${tasks} deleted from the database`);
});

export default router;

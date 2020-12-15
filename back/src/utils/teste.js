const { addTask , listTask } = require ("./crontab");

addTask(2, 2, 2, 2, 1, 'echo 0');

console.log(listTask());


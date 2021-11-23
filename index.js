const express = require('express');

const app = express();
const port = 5000;

//allow this app to receive incoming json request
//Create app.use for express.json here
app.use(express.json());

let todos = [
  {
    id: 1,
    title: 'Cuci tangan',
    isDone: true,
  },
  {
    id: 2,
    title: 'Jaga jarak',
    isDone: false,
  },
  {
    id: 3,
    title: 'Pakai Masker',
    isDone: true,
  },
];

//GET list route: simply send arr of obj todos on your user screen
// Create method GET here
app.get('/todos', (req, res) => {
  res.send({ data: todos });
});

//GET detail route: send the todo obj, by received id request params
// Create method GET by received id here
app.get('/todo/:id', (req, res) => {
  const id = req.params.id;

  const todoData = todos.find((todo) => todo.id == id);

  if (!todoData) {
    return res.send({
      status: 'failed',
      message: 'Data not found',
    });
  }

  res.send({
    data: {
      todo: todoData,
    },
  });
});

//POST route: receive json body request, from user input, then push to todos array
// Create method POST here
app.post('/todo', (req, res) => {
  const data = req.body;

  todos = [...todos, data];

  res.send({ data: todos });
});

//PATCH route: receive json body request, from user input, then push to todos array
//by object id
// Create method PATCH here
app.patch('/todo/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;

  todos = todos.map((todo) => {
    return todo.id == id ? { id, ...data } : todo;
  });

  res.send({ data: todos });
});

//DELETE route: delete the todo obj, by received id request params
// Create method DELETE here
app.delete('/todo/:id', (req, res) => {
  const id = req.params.id;

  todos = todos.filter((todo) => todo.id != id);

  res.send({
    status: 'success',
    message: `Delete Todos id = ${id} finished`,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

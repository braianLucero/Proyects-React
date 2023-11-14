const estadoIncial = [
  {
    id: 1,
    todo: "recolectar la piedra del alma ",
    done: false,
  },
];

const todoReducer = (state = estadoIncial, action = {}) => {
  if (action.type === "[Todo] add todo ") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo1 = {
  id: 2,
  todo: "recolectar la piedra del universo ",
  done: false,
};

const addTodoAction = {
  type: "[Todo] add todo ",
  payload: newTodo1,
};

todos = todoReducer(todos, addTodoAction);

const newTodo2 = {
  id: 3,
  todo: "recolectar la piedra de la tierra ",
  done: false,
};

const addTodoAction2 = {
  type: "[Todo] add todo ",
  payload: newTodo2,
};

todos = todoReducer(todos, addTodoAction2);

const newtodo4 = {
  id: 4,
  todo: "la base de todo  ",
  done: false,
};

const addTodoAction4 = {
  type: "[Todo] add todo ",
  payload: newtodo4,
};

todos = todoReducer(todos, addTodoAction4);

console.log({ state: todos });

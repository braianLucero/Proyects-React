const inicialState = [
  {
    id: 1,
    todo: "recolectando las piedra del alma ",
    done: false,
  },
];

const todoReducer = (state = inicialState, action = {}) => {
  if (action.type === "[TODO] add new todo ") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "recolectar la piedra del universo ",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add new todo ",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });

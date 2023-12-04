import React, { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const inicialState = [
  {
    id: new Date().getTime(),
    description: "recolectar la piedra del alma ",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "recolectar la piedra del universo",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, inicialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  return (
    <>
      <h1>
        TodoApp:10, <small>pendientes:2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          {/*TodoAdd  onNewTodo(todo)  */}
          {/* {id: new Date()..., description:'',done : false } */}
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

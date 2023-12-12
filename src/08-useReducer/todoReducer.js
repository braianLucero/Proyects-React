export const todoReducer = (inicialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...inicialState, action.payload];

    case "[TODO] remove Todo":
      return inicialState.filter((todo) => todo.id !== action.payload);

    default:
      return inicialState;
  }
};

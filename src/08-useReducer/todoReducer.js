export const todoReducer = (inicialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...inicialState, action.payload];

    default:
      return inicialState;
  }
};

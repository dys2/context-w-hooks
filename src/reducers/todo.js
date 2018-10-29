export const initialState = [];

export default (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "addToDo":
      return [...state, action.payload];
    case "removeToDo":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};
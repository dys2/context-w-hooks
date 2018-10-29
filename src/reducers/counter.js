export const initialState = 0;

export default (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
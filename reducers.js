export default function counter(state = 0, action) {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "INCREMENT_IF_ODD":
      return state % 2 !== 0 ? state + 1 : state;
    case "DECREMENT":
      return state - 1;
    case "REQUEST_CHAMADOS":
      return { ...state };
    case "SUCCESS_CHAMADOS":
      return { data: action.payload.data };
    case "FAILURE_CHAMADOS":
      return { data: [] };
    default:
      return state;
  }
}

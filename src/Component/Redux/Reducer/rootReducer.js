import filtersReducer from "./FilterSlice";
import todosReducer from "./todosSlice";

export const rootReducer = (state = {}, action) => {
  return {
    todos: todosReducer(state.todos, action),
    // // For both reducers, we only pass in their slice of the state
    filters: filtersReducer(state.filters, action),
  };
};

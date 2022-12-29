
const initialState = {
  todos: [
    { id: 0, name: 'Learn React', completed: true ,priorities:'Medium'},
    { id: 1, name: 'Learn Redux', completed: false, priorities:'Low' },
    
  ],
  filters: {
    status: 'All',
    colors: []
  }
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/todoAdded': {
      // We need to return a new state object
      return {
        // that has all the existing state data
        ...state,
        // but has a new array for the `todos` field
        todos: [
          // with all of the old todos
          ...state.todos,
          // and the new todo object
          {
            // Use an auto-incrementing numeric ID for this example
            id: action.payload.id,
            name: action.payload.name,
            completed: false,
            priorities:action.payload.priorities,
          }
        ]
      }
    }
    default:
      return state;
  }
};

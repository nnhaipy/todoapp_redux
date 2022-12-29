const initialTodoState = [
  { id: 0, name: "Learn React", completed: true, priorities: "Medium" },
  { id: 1, name: "Learn Redux", completed: false, priorities: "Low" },
  { id: 2, name: "Learn Redux Thunk", completed: false, priorities: "High" },
  { id: 3, name: "Gym", completed: false, priorities: "Medium" },
];

export default function todosReducer(state = initialTodoState, action) {
  switch (action.type) {
    case "todos/todoAdded": {
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          completed: false,
          priorities: action.payload.priorities,
        },
      ];
    }
    default:
      return state;
  }
}

const initialState = {
  status: "All",
  Priority: [],
  name: "",
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/statusFilterChanged": {
      return {
        ...state,
        status: action.payload,
      };
    }
    case "filter/SearchName": {
      return {
        ...state,
        name: action.payload,
      };
    }
    default:
      return state;
  }
}

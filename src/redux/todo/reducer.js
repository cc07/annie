import todoAction from './action';

const initState = {
  isFetching: false,
  hasError: false,
  items: [],
}

export default (state = initState, action) => {
  switch (action.type) {
    case todoAction.FETCH_TODO_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      }
    case todoAction.FETCH_TODO_LIST_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
      }
    case todoAction.FETCH_TODO_LIST_ERROR:
      return {
        ...state,
        hasError: true,
        isFetching: false,
      }
    default:
      return state;
  }
}

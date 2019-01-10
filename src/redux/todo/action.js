import axios from 'axios';

const FETCH_TODO_LIST_REQUEST = 'annie/FETCH_TODO_LIST_REQUEST';
const FETCH_TODO_LIST_SUCCESS = 'annie/FETCH_TODO_LIST_SUCCESS';
const FETCH_TODO_LIST_ERROR = 'annie/FETCH_TOFO_LIST_ERROR';

const fetchTodoListRequest = () => ({
  type: FETCH_TODO_LIST_REQUEST,
});

const fetchTodoListSuccess = (payload) => ({
  type: FETCH_TODO_LIST_SUCCESS,
  payload,
});

const fetchTodoListError = (payload) => ({
  type: FETCH_TODO_LIST_ERROR,
  payload,
});

const fetchTodoList = (dispatch) => async () => {

  dispatch(fetchTodoListRequest())

  const result = await axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10');

  if (result.status == 200) {
    const items = result.data;

    dispatch(fetchTodoListSuccess(items));

  } else {
    dispatch(fetchTodoListError('Fetch todo list failed'))
  }

}

export default {
  fetchTodoList,
  FETCH_TODO_LIST_REQUEST,
  FETCH_TODO_LIST_SUCCESS,
  FETCH_TODO_LIST_ERROR,
};

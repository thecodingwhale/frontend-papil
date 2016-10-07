import axios from 'axios';
import { createAction } from 'redux-actions'

export function fetchTodo() {
  const request = axios.get('http://papil.local/task/all')
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'fetch todo',
        payload: response.data
      })
    })
  }
}

// export const fetchTodo = createAction('fetch todo')
export function addTodo(todo) {
  const request = axios.post('http://papil.local/task', {
    user_id: 1,
    text: todo,
    completed: 0
  });
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: 'add todo',
        payload: todo
      })
    })
  }
}

export function deleteTodo(id) {
  const request = axios.delete('http://papil.local/task/' + id);
  return (dispatch) => {
    dispatch({
      type: 'delete todo',
      payload: id
    })
  }
}

export function editTodo(todo) {
  const request = axios.patch('http://papil.local/task/' + todo.id, {
    user_id: 1,
    text: todo.text
  });
  return (dispatch) => {
    dispatch({
      type: 'edit todo',
      payload: todo
    })
  }
}

export function completeTodo(todoId) {
  const request = axios.patch('http://papil.local/task/' + todoId, {
    user_id: 1,
    completed: true
  });
  return (dispatch) => {
    dispatch({
      type: 'complete todo',
      payload: todoId
    })
  }
}

export const completeAll = createAction('complete all')
export const clearCompleted = createAction('clear complete')
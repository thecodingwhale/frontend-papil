import axios from 'axios';
import { createAction } from 'redux-actions'

export function fetchTodo() {
  const request = axios.get('http://pet-project.local/task/all')
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
export const addTodo = createAction('add todo')
export const deleteTodo = createAction('delete todo')
export const editTodo = createAction('edit todo')
export const completeTodo = createAction('complete todo')
export const completeAll = createAction('complete all')
export const clearCompleted = createAction('clear complete')

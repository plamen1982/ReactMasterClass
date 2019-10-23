import * as actions from './actionTypes';
import axios from 'axios';

export const getTodoById = id => async dispatch => {
    const data = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    dispatch({ type: actions.GET_TODO_BY_ID, data });
};

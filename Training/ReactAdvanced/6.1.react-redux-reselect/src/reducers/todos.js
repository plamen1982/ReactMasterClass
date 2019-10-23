import { GET_TODO_BY_ID } from '../actions/actionTypes';

const todosReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TODO_BY_ID:
            return { ...action.data.data };
        default:
            return state;
    }
};

export default todosReducer;

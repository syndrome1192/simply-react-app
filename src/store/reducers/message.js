import {
    FETCH_LOADER_END,
    FETCH_LOADER_START,
    FETCH_MESSAGE_ERROR,
    FETCH_MESSAGE_SUCCESS,
    FETCH_USERS_SUCCESS,
    FETCH_SEARCH_RESULT


} from '../actions/actionTypes';

const initialState = {
    messages: [],
    users: [],
    errors: '',
    loader: false,
    filteredMsg: ''

}

export default function messageReducer(state=initialState, action){
    switch(action.type){
        case FETCH_MESSAGE_SUCCESS:
            return {
                ...state, messages: action.messages
            }
        case FETCH_MESSAGE_ERROR:
            return {
                ...state, errors: action.messages
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state, users: action.users
            }
        case FETCH_LOADER_START:
            return {
                ...state, loader: true
            }
        case FETCH_LOADER_END:
            return {
                ...state, loader: false
            }
        case FETCH_SEARCH_RESULT:
            return {
                ...state, filteredMsg: action.value
            }

        default:
            return state
    }

}
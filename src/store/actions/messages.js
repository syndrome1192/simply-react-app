import {
    FETCH_MESSAGE_SUCCESS,
    FETCH_MESSAGE_ERROR,
    FETCH_USERS_SUCCESS,
    FETCH_LOADER_START,
    FETCH_LOADER_END,
    FETCH_SEARCH_RESULT

} from './actionTypes';

export function fetchMessage(){
    return async dispatch => {
        try {
            dispatch(fetchLoaderStart())

            await fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => dispatch(fetchMessageSuccess(json)))

            await fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((json) => dispatch(fetchUsersSuccess(json)))

            dispatch(fetchLoaderEnd())

        } catch (e) {
            dispatch(fetchMessageError(e))
        }
    }
}

export function  onChangeHandler(e){
    return {
        type: FETCH_SEARCH_RESULT,
        value: e
    }
}

export function  fetchLoaderStart(){
    return {
        type: FETCH_LOADER_START,

    }
}

export function  fetchLoaderEnd(){
    return {
        type: FETCH_LOADER_END,

    }
}

export function fetchUsersSuccess(data){
    return {
        type: FETCH_USERS_SUCCESS,
        users: data

    }
}

export function fetchMessageSuccess(quiz){
    return{
        type: FETCH_MESSAGE_SUCCESS,
        messages: quiz
    }
}

export function  fetchMessageError(e){
    return {
        type: FETCH_MESSAGE_ERROR,
        messages: e
    }
}


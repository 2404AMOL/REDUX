

//! axios
//todo : It is used to make requst to API endpoint
//? command : npm i axios

//! redux-thunk
//todo : Define async action creators
//? command : npm i redux-thunk

const applyMiddleware = redux.applyMiddleware
const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const createStore = redux.createStore;


const initialState = {
    loading : false,
    user : [],
    error : ''
}

const FETCH_USER_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USER_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USER_FAILED = 'FETCH_USERS_FAILED';

const fectchUserRequest = () =>{
    return{
        type : FETCH_USER_REQUEST
    }
}

const fectchUserSuccess = (users) =>{
    return{
        type : FETCH_USER_SUCCEEDED,
        payload : users,
        error : ''
    }
}

const fectchUserFailed = (error) =>{
    return{
        type : FETCH_USER_FAILED,
        payload : error
    }
}

const reducer = (state = initialState,action) =>{

    switch(action.type){
        case FETCH_USER_REQUEST : return{
            ...state,
            loading : true,
        }

        case FETCH_USER_SUCCEEDED : return{
            ...state,
            users : action.payload,
            error : ''
        }

        case FETCH_USER_FAILED : return{
            ...state,
            users : [],
            error : action.payload
        }
    }
}

const store = createStore(reducer,applyMiddleware)

const fectchUser = () =>{
    
}

//! Require the Redux
const redux = require('redux');
const creatStore = redux.createStore;
const initialState = {
    loading : false,
    users : [],
    error : ''
}

//! Define the String Constant
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'
//! Define the Action Creators
const fetchUsersRequest = () =>{
    return {
        type : FETCH_USERS_REQUESTED
    }
}

const fetchUsersSucceess = () =>{
    return{
        type : FETCH_USERS_SUCCEEDED,
        payload : users,
    }
}

const fetchUsersFailed = () =>{
    return{
        type : FETCH_USERS_FAILED,
        payload : error,
    }
}

//! Define the Reducer
const reducer = (state = initialState ,action) =>{
    switch(action.type){
        case FETCH_USERS_REQUESTED : return {
            ...state,
            loading : true
        }
        case fetchUsersSucceess : return{
            ...state,
            loading : false,
            users : [],
            error : action.payload
        }
        case FETCH_USERS_FAILED : return{
            ...state,
            loading : false,
            users : [],
            error : action.payload
        }
    }
}

//! Define the Store
const store = creatStore(reducer);
console.log('Initial State',store.getState());

//! API Calls
//todo : For the API we need install the two more packages.
//* 1.axios
//* 2.Redux Thunk
    
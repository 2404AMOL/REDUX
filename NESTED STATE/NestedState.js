//! 1.Require from the Node Modules
const redux = require('redux');
const createStore = redux.createStore;

//! 1.Initial State
const initialState = {
    name : "Amol",
    //* Nested State
    address : {
        street : "Bhalwani",
        city : "Solapur",
        state : "Maharashtra",
        pin : 411033
    }
}

//! 2.Definr the STRING CONSTANTS
const STREET_UPDATED = " STREET UPDATED";

//! 3.ACTION CREATOR
//todo : To update the nested property we have create the Action Listener for that.
const updateStreet = (street) =>{
    return {
        type : STREET_UPDATED,
        payload : street
    }
}

//! 4.REDUCER
const reducer = (state = initialState,action) =>{
    switch(action.type){
        case STREET_UPDATED : return {
            //* Create a new copy of state
            //* Use spread operator to copy all properties of the state
            //* Update the street property with the new street value
            //* Return the new state
            ...state,
            address : {
                //* Create a new copy of address
                //* Use spread operator to copy all properties of the address
                //* Update the street property with the new street value
                //* Return the new address
                ...state.address,
                street : action.payload,
            }
        }
        //* Default case to return the current state
        default : return state
    }
}

//! 5. CREATE THE STORE
const store = createStore(reducer);
console.log('Initial State',store.getState());

const subscribe = (()=>{
    console.log('Update State',store.getState());
})

store.dispatch(updateStreet("Satara-Pandharpur Road,Bhalawnai"));

subscribe();

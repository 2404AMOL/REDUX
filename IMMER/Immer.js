
//! command : npm i immer
//todo :  It helps to update the Nested Object.

const redux = require('redux')
const createStore = redux.createStore;
const produce  = require('immer').produce

const initialState = {
    name : 'Amol',
    //! Nested Object
    address : {
        street : 'Bhalawani',
        city : 'Solapur',
        state : 'Maharastra'
    }
}
//! Step 1: Define Constant For Street
const STREET_UPDATED = 'STREET_UPDATED';
//! Step 2: Create Action Creator Function For Street
const updateStreet = (street) =>{
    return { 
        type : STREET_UPDATED,
        payload : street
    }
}
//! Step 3: Create Reducer Function to  handle Action
const reducer = (state = initialState,action) =>{
    switch(action.type){
        case STREET_UPDATED :
            //  return{
            // ...state,
            // address : {
            //     ...state.address,
            //     street : action.payload,
            // }

            //! It takes two arguments
            //? 1.CurrentState 2.DraftCopyofState
            //* Using immer produce function to create a new state
            //* This will automatically create a shallow copy of the state
            //* Then update the street property with the new street value
            //* Return the new state.
            return produce(state,(draft) =>{
                draft.address = action.payload;
            }) 

            default : {
                return state;
            }
        }
    }
//! Step 4: Create Store
const store = createStore(reducer)
console.log('Initial State',store.getState());
const unsubscribe = store.subscribe(()=>{
    console.log('Updated State',store.getState());
})
store.dispatch(updateStreet('Satara-Pandharpur rd'))

    unsubscribe();
    
//! 1.Import redux package from modules
const redux = require('redux');
//* 1st way
const createStore = redux.createStore;
//* 2nd way
// const store = redux.createStore(Reducer);

//! 2.STRING CONSTANTS TO INDICATE TYPE OF STRING
const CAKE_ORDERED = "CAKE ORDERED";

//! 3.ACTION CREATORS
//todo : Redux is Javscript Plain Javscript Object that return the Object itself.
function orderCake(){
    return{
        type : CAKE_ORDERED,
        quantity : 1
    }
}

//! 4.Initial State
const initialState = {
    numOfCake : 10,
    anotherCake : 0
}

//! 5.REDUCER
//todo : Reducers are accepts two arguments
//* 1.Current State
//* 2.Action

const Reducer = (state = initialState,action) =>{
    //todo : Check type of action and return new state based on action type.
    switch(action.type){
        //todo : Return new state
        case CAKE_ORDERED : return{
            //todo : If State contains multiple property then copy the state Object using ...[Spread Operator]
            //todo : Then change Only that Property need to
            ...state,
            //todo : Only numOfCakes Property s Changed not another property.
            numOfCake : state.numOfCake - 1
        }
        //todo : If no action match then return original state
        default: return state;
    }    
}

//! 6.CREATE REDUX STORE
const store = createStore(Reducer);
console.log('Initial state',store.getState());

//! 7.LISTENERS
 //todo : When any time Store update we log to console
//? : Subscribe to store to get updates
store.subscribe(()=>{
    //todo : Log updated state to console.
    //? getState : This mehode return the state
    console.log('Updated State',store.getState());
    //todo : Update UI
})

//! 8.DISPATCH ACTION
//todo : dispactch is update the state of the store
//? orderCake : This action creator return action object.

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

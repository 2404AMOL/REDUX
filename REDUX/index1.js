//! command : npm i redux
//todo : For Package Json
//? npm i init --yes
//todo : command to install redux in npm
//? npm i redux

//! 1.First Require the Package
const redux  = require('redux');

//! 2.CREATE a STRING CONSTANT TO INDICATE TYPE OF STRING
const CAKE_ORDERED = "CAKE ORDERED";

//! 3.ACTION CREATORS
//todo : Redux is Javascript plain object that return the Object itself.
function orderCake(){
    return{
        type : CAKE_ORDERED,
        quantity : 1
    }
}

//! 4.Initial State
const initialState = {
        numOfCake : 10,
}

//! 5.REDUCER
//todo : Reducer accepts two arguments
//* 1.Current State
//* 2.Action
const Reducer = (state = initialState,action) =>{
    //todo : Check type of action and return new state based on action type.
   switch(action.type){
    //todo : Return New State
    case CAKE_ORDERED : return{
            //todo : If State contains multiple property then copy the state Object using...[Spread Operator]
            //todo : Then change Only that Property need to
           ...state,
            numOfCake : state.numOfCake - action.payload
        }
        default : return state; //todo : If no action type match then return the current state
   }
}


//! 6. CREATE STORE
const store = redux.createStore(Reducer);
console.log('Initial State',store.getState());

//! 7. SUBSCRIBE LISTENERS
//todo : When any time Store update we log to console
//? : Subscribe to store to get updates
store.subscribe(() =>{
    //todo : Log updated state to console.
    //? getState : This mehode return the state current state.
    console.log('Updated State',store.getState());
    //todo : Update UI
})

//! 8. DISPATCH ACTION
//todo : Dispatch action to update the state
//? orderCake : This action creator return action object.
// store.dispatch({
//     type : CAKE_ORDERED,
//     quantity : 1
// })

store.dispatch(orderCake());
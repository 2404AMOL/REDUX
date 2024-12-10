
//! command : npm i redux

const redux = require('redux');


//! STRING CONSTATNT TO INDICATE TYPE OF STRING
const CAKE_ORDERED = "CAKE ORDERED";

//! 1.ACTION CREATORS
//todo : Redux is Javscript Plain Javscript Object that return the Object itself.
// function orderCake(){
//     return{
//         type: CAKE_ORDERED,
//         quantity : 1
//     }
// }

//! Initial State
const initialState = {
    numOfCakes : 10,
}


//! 2.REDUCER
//todo : Reducer are acepts two arguments
//* : 1.Current state
//* : 2.Action
const reducer = (state = initialState, action) =>{
    //todo : Check type of action and return new state based on action type.
    switch(action.type){
        //todo : Return new state
        case CAKE_ORDERED : return{
            numOfCakes : state.numOfCakes - 1
        }
        default: return state
    }
}


//! 3.STORE
const store = redux.createStore(reducer);
console.log('Initial state',store.getState());



//! Listeners
//todo : When any time Store update we log to console
//? : Subscribe to store to get updates
store.subscribe(() => {
    //todo : Log updated state to console.
    //? getState : This mehode return the state
    console.log("Updated State", store.getState());
    //todo : Update UI
    });

//! dispatch : 
//todo : dispactch is update the state of the store
    //? orderCake : This action creator return action object.
    store.dispatch({
        type: CAKE_ORDERED,
        quantity : 1
    });

    // store.dispatch(); //? ERROR : Must be plain object
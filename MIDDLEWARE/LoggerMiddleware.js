//! MIDDLEWARE
//todo : It the suggested way to extend Redux with custom Functionality.
//todo : Provides a third-party extensions point between dispatching an action,and the moment it reaches the reducer
//todo : Use Middleware for logging,crash detection,performaning asynchronous task etc

//! Logger
//todo : Use Middleware for logging,crash detection,performaning
//* Installing Package
//? command :  npm i redux-logger

//! MULTIPLE REDUCER
//todo : Fot the Multiple Reducer We have spilt the State and Reducers
//todo : Make a Seperate State For different Entity

//todo : import this from node 
const redux = require('redux');

//todo : Redux createStore function creates a Redux store that holds the complete state tree of your application.
const createStore = redux.createStore

//todo : Helper functions
const bindActionCreators = redux.bindActionCreators;

//todo : It combine multiple reducers
const combineReducers  = redux.combineReducers

//todo : Middleware
const Middleware =redux.applyMiddleware

//todo : Logger
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();


//! STRING CONSTATNT TO INDICATE TYPE OF STRING
const CAKE_ORDERED = "CAKE ORDERED";
const CAKE_RESTOCK = "CAKE RESTOCK";
const ICECREAM_ORDERED = "ICECREAM ORDERED";
const ICECREAM_RESTOCK = "ICECREAM RESTOCK";

//! 1.ACTION CREATORS
//todo : Redux is Javscript Plain Javscript Object that return the Object itself.
function orderCake(){
    return{
        type: CAKE_ORDERED,
        payload : 1
    }
}

function restockCake(qty = 1){
    return{
        type : CAKE_RESTOCK,
        payload: qty
    }
}

function orderIceCream(){
    return{
        type : ICECREAM_ORDERED,
        payload : 1
    }
}

function restockIceCream(qty = 1){
    return{
        type : ICECREAM_RESTOCK,
        payload : qty
    }
}


//! Initial State
// const initialState = {
//     numOfCakes : 10,
//     numOfIceCreams : 20
// }

//* 1.Initial State For Cake 
const initialCakeState = {
    numOfCakes : 10
}
//* 2.Initial State For Ice-Cream
const initialIceCreamState = {
    numOfIceCreams : 20
}


//! 2.REDUCER
//todo : Reducer are acepts two arguments
//* : 1.Current state
//* : 2.Action
const cakeReducer = (state = initialCakeState, action) =>{
    //todo : Check type of action and return new state based on action type.
    switch(action.type){
        //todo : Return new state
        case CAKE_ORDERED : return{
             //todo : If State contains multiple property then copy the state Object using ...[Spread Operator]
            //todo : Then change Only that Property need to
            ...state,
            //todo : Only numOfCakes Property s Changed not another property.
            numOfCakes : state.numOfCakes - 1
        }

        case CAKE_RESTOCK : return {
            ...state,
            numOfCakes : state.numOfCakes + action.payload
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) =>{
    //todo : Check type of action and return new state based on action type.
    switch(action.type){

        case ICECREAM_ORDERED : return{
            ...state,
            numOfIceCreams : state.numOfIceCreams - 1
        }

        case ICECREAM_RESTOCK : return{
            ...state,
            numOfIceCreams : state.numOfIceCreams + action.payload
        }

        default: return state
    }
}


//! Combine Reduecr

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer  //todo : Combine Reducer of Cake and IceCream.
})



//! 3.STORE
//? createStore() : it accepts only one reducer
const store = createStore(rootReducer,Middleware(logger));
console.log('Initial state',store.getState());

//! Listeners
//todo : When any time Store update we log to console
//? : Subscribe to store to get updates
store.subscribe(() => {
    //todo : Log updated state to console.
    //? getState : This mehode return the state
    // console.log("Updated State", store.getState());
    //todo : Update UI
    });

//! dispatch : 
//todo : dispactch is update the state of the store
    //? orderCake : This action creator return action object.
    // store.dispatch({
    //     type: CAKE_ORDERED,
    //     quantity : 1
    // });

    //! 1st Way
    // store.dispatch(orderCake()); 
    // store.dispatch(restockCake());
    // store.dispatch(restockCake(3));

    //! 2nd Way
    //todo : bindActionCreators : This helper function automatically creates action creators that automatically dispatch the actions when called.
    //? orderCake, restockCake : These are action creators
    //? store.dispatch : This is dispatch function.
    //? actions.orderCake, actions.restockCake : These are returned actions after bindActionCreators.
    //? actions.orderCake(); actions.orderCake(); actions.orderCake(); actions.restockCake(3);
    const actions = bindActionCreators({orderCake,restockCake,orderIceCream,restockIceCream},store.dispatch)
    actions.orderCake();
    actions.orderCake();
    actions.orderCake();
    actions.restockCake(3);
    actions.orderIceCream();
    actions.orderIceCream();
    actions.restockIceCream(2);


//todo : import this from node
const redux = require("redux");

//todo : Redux createStore function creates a Redux store that holds the complete state tree of your application.
const createStore = redux.createStore;

//todo : Helper functions
const bindActionCreators = redux.bindActionCreators;

//! STRING CONSTATNT TO INDICATE TYPE OF STRING
const CAKE_ORDERED = "CAKE ORDERED";
const CAKE_RESTOCK = "CAKE RESTOCK";

//! 1.ACTION CREATORS
//todo : Redux is Javscript Plain Javscript Object that return the Object itself.
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCK,
    payload: qty,
  };
}

//! Initial State
const initialState = {
  numOfCakes: 10,
};

//! 2.REDUCER
//todo : Reducer are acepts two arguments
//* : 1.Current state
//* : 2.Action
const reducer = (state = initialState, action) => {
  //todo : Check type of action and return new state based on action type.
  switch (action.type) {
    //todo : Return new state
    case CAKE_ORDERED:
      return {
        //todo : If State contains multiple property then copy the state Object using ...[Spread Operator]
        //todo : Then change Only that Property need to
        ...state,
        //todo : Only numOfCakes Property s Changed not another property.
        numOfCakes: state.numOfCakes - 1,
      };

    case CAKE_RESTOCK:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

//! 3.STORE
const store = createStore(reducer);
console.log("Initial state", store.getState());

//! Listeners
//todo : When any time Store update we log to console
//? : Subscribe to store to get updates
const unsubscribe = store.subscribe(() => {
  //todo : Log updated state to console.
  //? getState : This mehode return the state
  console.log("Updated State", store.getState());
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
const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

unsubscribe();

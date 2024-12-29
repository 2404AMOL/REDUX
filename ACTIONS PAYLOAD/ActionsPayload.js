//! 1.Require Package From The Module
const redux = require("redux");
const createStore = redux.createStore;

//! 2.Define the String Conatants
//! STRING CONSTANTANTS TO INDICATE TYPE OF STRING
const CAKE_ORDERED = "CAKE ORDERED";
const CAKE_RESTOCKED = "CAKE RESTOCKED";

//! 3.ACTION CREATORS
//todo : Redux is Javscript Plain Javscript Object that return the Object itself.
function orderCake() {
  return {
    type: CAKE_ORDERED,
    //* Payload gives the additional information.
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    //* Payload gives the additional information.
    payload: qty,
  };
}

//! 4.Initial State
const initialState = {
  numOfCakes: 10,
};

//! 5.Reducer
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
        //todo : Then change Only that Property need to.
        ...state,
        //todo : Only numOfCakes Property s Changed not another property.
        numOfCakes: state.numOfCakes - 1,
      };

    case CAKE_RESTOCKED:
      return {
        //todo : Return new state
        //todo : If State contains multiple property then copy the state Object using...[Spread Operator]
        //todo : Then change Only that Property need to.
        //todo : Only numOfCakes Property s Changed not another property.
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    //todo : If action type is not match with any case then return the current state.
    default:
      return state;
  }
};

//! 6. Create Store
const store = createStore(reducer);
console.log("Initial State", store.getState());

//! 7.Listeners
//todo : When any time Store update we log to console
//? : Subscribe to store to get updates
store.subscribe(() => {
  //todo : Log updated state to console.
  //? getState : This mehode returns the updated state
  console.log("Update State", store.getState());
  //todo : Update UI
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake());
store.dispatch(restockCake(2));
store.dispatch(restockCake(3));

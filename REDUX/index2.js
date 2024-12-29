//* Requiring the redux module
//todo : In the Node module we neew use of Require.
const redux = require("redux");

//* Creating the Store
const createStore = redux.createStore;

//* 1.Creating the String Constants.
const CAKE_ORDERED = "CAKE_ORDERED";

//* 2.Define the ActionsCreators.
//todo : Actions creator are simply creates the actions.
//todo : Actions creators is the Function that returns the Object.
//todo : Actions have the 'type' property.
//todo : Othere than 'type' we have add one more property to the.
//todo : Actions describes only what happened bu not describes how to state changes.
// function ordereCake() {
//   //todo : It return the Object
//   return {
//     type: CAKE_ORDERED,
//     quantity: 1,
//   };
// }

//* 3.Define the State
//* State is the object which have property.
const initialState = {
  numOfCakes: 10,
  //todo : Adding another property to the state.
  anotherProperty: 0,
};

//* 4.Define the Reducers
//todo : It accepts two arguments
//? 1.currentState
//? 2.Actions
//todo : Reducers specify the app state changes in response to actions sent to the store.
//todo : So Reducers describe the how to state changes.
//todo : Reducers is the Funtions that accepts the current State & actions and returns the next state of the applications.
//? (prevState,actions) => return the new state
const reducer = (state = initialState, actions) => {
  //todo : We have to define switch case & check the actions type
  //todo : Based on the actions type we have to return the new state.
  //todo : In this case, if 'CAKE_ORDERED' action is received then we decrement the 'numOfCakes' property.
  switch (actions.type) {
    //todo : If the case matches then it will returns the new State.
    case CAKE_ORDERED:
      return {
        //todo : If the state contains multiple property then copy current state.
        //todo : Using spread operator to copy the current state.
        ...state,
        //todo : Decrement the 'numOfCakes' property by 1.
        numOfCakes: state.numOfCakes - 1,
      };
    //todo : If the action type is not 'CAKE_ORDERED' then we return the current state.
    default:
      return state;
  }
};

//* 5.create the Store
//todo : There is only One Store for the entire application.
//? : Responsibilities -
//todo : 1.Holds the Application of the state
//todo : 2.Allow to access to state via getState()
//todo : 3.Allow to access state to be updated via dispatch(action).
//todo : 4.Registers the listners via subscribe(listener)
//todo : 5.Handles unregistering of listeners via the function returned by subscribe(listners).
//todo : The createStore method accepts the createStore(reducer).
//todo : The createStore method accepts only one reducer.

const store = createStore(reducer);

//todo : Now we can use the store methods
//* store.getState()
//todo : It is used to access the current state of the application
console.log("Initial state", store.getState());

//* store.subscribe
//todo : It is used listens the state i.e it gets updated state.
//todo : The subscribe method accepts an function that will be called.
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

//* store.dispatch(action)
//todo : Now we can update the state using dispacth methods.

//* Passing action directly in the dispatch method
//todo : If you dont want to create the Action Creator then the pass the Action Object inside the dispatch method.
//? store.dispatch({
//?   type: CAKE_ORDERED,
//?   quantity: 1,
//? });
//todo : But the passing the Action Object inside the dispatch method it makes lengthy code.
//todo : Passing Action Creator Functions make short line code.
//todo : Also you can pass the Value in Function also.
//todo : So go with always Action Creator.

//* Passing action Object created by Action Creator
store.dispatch({
    type: CAKE_ORDERED,
    quantity: 1,
});
store.dispatch({
    type: CAKE_ORDERED,
    quantity: 1,
});
store.dispatch({
    type: CAKE_ORDERED,
    quantity: 1,
});
store.dispatch({
    type: CAKE_ORDERED,
    quantity: 1,
});

unsubscribe();

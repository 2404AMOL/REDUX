
//* Requiring the redux module
//todo : In the Node module we neew use of Require.
const redux = require('redux');

//* Creating the Store
const createStore = redux.createStore;



//* Create the Store
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
//todo : Now we can use the store to dispatch the actions.

//todo : Now we can use the store methods
//* store.getState()
//todo : It is used to access the current state of the application
console.log('Initial state',store.getState());

//* store.subscribe
//todo : It is used listens the state i.e it gets updated state.
//todo : The subscribe method accepts an function that will be called.
store.subscribe(() => console.log('Updated state',store.getState()));

//* store.dispatch(action)
//todo : Now we can update the state using dispacth methods.
store.dispatch(ordereCake());
//todo : Now the 'numOfCakes' property will be decremented by 1.

//* State
//* State is the object which have property.
const initialState = {
    numOfCakes : 10,
    //todo : Adding another property to the state.
    anotherProperty : 0
} 

//* Reducers
//todo : It accepts two arguments
//? 1.currentState
//? 2.Actions
//todo : The Reducer is the Pure Function.
//todo : Reducers specify the app state changes in response to actions sent to the store.
//todo : So Reducers describe the how to state changes.
//todo : Reducers is the Funtions that accepts the current State & actions and returns the next state of the applications.
//? Example :
//? (prevState,actions) => return the new state
const reducer = (state = initialState, actions) =>{
    //todo : We have to define switch case & check the actions type
    //todo : Based on the actions type we have to return the new state.
    //todo : In this case, if 'CAKE_ORDERED' action is received then we decrement the 'numOfCakes' property.
    switch(actions.type){
        //todo : If the case matches then it will returns the new State.
        case CAKE_ORDERED : return {
            //todo : If the state contains multiple property then copy current state.
            //todo : Using spread operator to copy the current state.
            ...state,
            //todo : Decrement the 'numOfCakes' property by 1.
            numOfCakes : state.numOfCakes--
        }
        //todo : If the action type is not 'CAKE_ORDERED' then we return the current state.
        default:
            return state
        }
    }




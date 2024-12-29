//* Three Principles

//* 1.First Principle
//todo : First principles tells you that :
//todo : The global state of your application is stored as an object inside a single store.
//todo : Maintain our application state in a single object which would be managed by the Redux Store.
//todo : Lets asume we are tracking the number of cakes on the shelf
//? Example :  
//? Cake Shop - 
{
    numOfCakes: 10,
}  

//* 2.Second Principle
//todo : The Second Principle tell you that :
//todo : The only way to change the state to a dispactch an action,an object that describes what happened.
//todo : To update the state of your app, you nedd to let Redux know about that with an action Not allowed to directly update the state object.
//? : Cake Shop
//todo : Scan the QR code and place an order - CAKE_ORDERED   
{
    type : 'CAKE_ORDERED',
}
//todo : Basically the Second Principle told us that state can only be transformed by dispatching actions.

//* 3.Third Priciples
//todo : The Third Principle tell you that :
//todo : To specify how the state tree is updated on actions,you write pure reducers. 
//todo : The Reducer is the Pure Function that 
//? Example : 
const reducer = (state = initialState,action) =>{
    switch (action.type) {
        case CAKE_ORDERED:
            return {
               ...state,
                numOfCakes: state.numOfCakes - 1,
            }
        default:
            return state;
    }
}
//* What is Redux Thunk?
//todo : Redux Thunk is like a co-worker for Redux, giving it the power to handle asynchronous actions.
//todo : It’s that extra tool that allows your Redux store to deal with things like fetching data from a server or performing tasks that take some time.
//todo : With Redux Thunk, your app can smoothly manage both synchronous and asynchronous operations.
//todo : Redux-Thunk is a library basically is middleware we are applying on the store.

//! Syntax of Redux Thunk:
//? export const fetchData = createAsyncThunk(
//?   'data/fetchData',
//?   async () => { } // runs when fetchData is dispatched
//? );

//? command to install Thunk In React: 
//! npm install @reduxjs/toolkit react-redux redux-thunk
 
//? command to install Thunk in Modules
//! npm i redux-thunk
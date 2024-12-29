//! ASYNCH ACTIONS
//todo : Asynch Actions used to fetch The API calls
//todo :  Asynchronous actions are very important in web development, particularly in tasks such as fetching data from API.
//todo :  Redux Thunk is a middleware using which you can write action creators that return a function instead of an object.
//todo :  This function can perform asynchronous operations and dispatch actions to try and catch blocks.

//* What is Synchronous Actions :
//todo : As soon as an action was dispatched the state was immediately updated updated.
//todo : If you dispatch the CAKE_ORDERED action the numOfCakes was right away decreament by 1.
//todo : Same with ICE_ORDERED action as well.

//* ASYNCH ACTIONS :
//todo : Asynchronous API calls to fetch data from an end point use that data in your application.

//* HOW TO WORK the Following concepts in Asynchronous API
//* 1.State?
//* 2.Actions?
//* 3.Reducer?

//! 1.State :
//todo : Typically in Data Fetching we go three property in state object.
//?  state {
//?     loading : true,
//?     data : [],
//?     error :' '
//?  }
//* 1.loading : Display a loading spinner in your component.
//* 2.data : List of Users.It have empty array [] currently.
//* 3.error : Displays the error message either Successful or Failed.

//! 2.Actions :
//todo : We are going have three actions.
//* 1.FETCH_USERS_REQUESTED : Fetch the List of Users
//* 2.FETCH_USERS_SUCCEEDED : If data Fetched successfully.
//* 3.FETCH_USERS_FAILED : If there is error when fetching the data.

//! 3.Reducers :
//todo :
//* 1. case : FETCH_USERS_REQUESTED
//? => loading : true
//* 2. case : FETCH_USERS_SUCCESSED
//? => loading : false,
//? => users : data(from API)
//* 3. case : FETCH_USERS_FAILED
//? => loading : false,
//? => error : error(from API)

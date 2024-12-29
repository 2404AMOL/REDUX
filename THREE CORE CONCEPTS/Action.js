//* Actions
//todo : Actions are the way your applications can interact with the store.
//todo : Actions  carry some information from your app to teh redux store.
//todo : Actions are the Plain Javascript Objects.
//todo : Actions have a 'type' property that describes something that happened in the appliaction.
//todo : The 'type' property is typically defined as string constants.

//* 1.Creating the String Constants.
const CAKE_ORDERED = "CAKE_ORDERED";

//* 2.Define the ActionsCreators.
//todo : Actions creator are simply creates the actions.
//todo : Actions creators is the Function that returns the Object.
//todo : Actions have the 'type' property.
//todo : Othere than 'type' we have add one more property to the.
//todo : Actions describes only what happened bu not describes how to state changes.
//? Example :
function ordereCake() {
  //todo : It return the Object
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

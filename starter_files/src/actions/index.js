import * as ActionTypes from '../actionTypes/actions';
// The above import takes care of importing all action types.

export const homeWorld = world => {
  return {
    type: ActionTypes.SHOW_WORLD,
    payload: alert("Homeworld: " + world + " Check console") + console.log('Dispatching: ActionTypes.SHOW_WORLD. Check state below V' )
  };
};



{/*
Add a filmDirector and starshipModel action.
The alerts should display the following; for 'filmDirector' show the director's name, for starshipModel show starship's model.
  */
}

{/* ONCE YOU HAVE REFACTORED THE FILMS AND STARSHIPS COMPONENTS,
  AND ADDED THEIR APPROPIATE ACTIONS, ACTION TYPES, AND REDUCERS, UNCOMMENT THIS
  CODE BLOCK AND DELETE THIS COMMENT.
export const setDetails = data => {
  console.log('ACTIONS: setDetails(). received data and passing the following payload:', data)
  return {
    type: ActionTypes.DETAILS,
    payload: {data}
  };
};
*/}

import {combineReducers} from 'redux';
import * as ActionTypes from '../actionTypes/actions';
import {setDetails} from '../actions'

import PeopleData from '../data/Peopledata';
import FilmsData from '../data/Filmsdata';
import StarshipsData from '../data/Starshipsdata';



// Using the SHOW_WOLRD case as an example, create (below SHOW_WORLD) one
// for SHOW_DIRECTOR and one for SHOW_MODEL.

function stateExample(state = '', action) {
  switch (action.type) {
    case ActionTypes.SHOW_WORLD:
      return "Just triggered SHOW_WORLD actionType and set state!"

    default:
      return state;
  }
}

// COMPLETE LINE 44
{/* ONCE YOU HAVE REFACTORED THE FILMS AND STARSHIPS COMPONENTS,
  AND ADDED THEIR APPROPIATE ACTIONS, ACTION TYPES, AND REDUCERS, UNCOMMENT THIS
  CODE BLOCK AND DELETE THIS COMMENT.

function details(state = "", action) {
  switch (action.type) {
    case ActionTypes.DETAILS:
      console.log("Just triggered DETAILS actionType and set state. See 'details' below V");
      return action.payload.data

    default:
      return state;
  }
}
*/}

// Don't forget to include all reducers.
// Add data for 'films' and 'starships', use 'people' object (combineReducers) as a guide.

const rootReducer = combineReducers({people: PeopleData});

export default rootReducer;

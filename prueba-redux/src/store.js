import {createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"

//reducer
const initialState = {
  counter: 0
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    //agregamos la acción al reducer
    case "ADD_COUNTER":
      return{
        ...state,
        counter: state.counter + 1
      }

    default:
      return state;
  }
};

//acción
export const addCounter = () => dispatch => {
  return dispatch({
    type: "ADD_COUNTER"
  })
}
//creación del store
export function initializeStore(){
  return createStore(reducer, initialState,applyMiddleware(thunkMiddleware))
}
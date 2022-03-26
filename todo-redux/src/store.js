import {createStore} from "redux"


// reducer
const initialState = {
  tasks: []

}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return{
        ...state,
        tasks:[]
      }
    default:
      return state
  }
}

// action
export const AddTask= () => dispatch => {
  return dispatch({
    type: "ADD_TASK"
  })
}
//creación del store
export function initializeStore(){
  return createStore(reducer)
}

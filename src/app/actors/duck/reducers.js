import types from './types'

const INITIAL_STATE = {
    listName: 'Best',
    list: [
      'Karolak', 'Braciak', 'Olbrychski', 'Klos'
    ]
  }

  
const actorsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case types.ADD_ACTORS:
        return {
          ...state, list: [...state.list, action.item] 
        }
      case types.RESET_ACTORS:
        return {
         ...state, list: []
        }
      default:
        return state
    }
  }

  export default actorsReducer
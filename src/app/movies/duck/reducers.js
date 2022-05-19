
const INITILA_MOVIES = {
    listName: 'favorite',
    list: [
      'Żółwie ninja', 'Sonic', 'Shrek', 'Epoka lodowcowa'
    ]
  }

const movies = (state=INITILA_MOVIES, action) => {
    switch(action.type) {
      case 'ADD_MOVIE':
        return {
          ...state, list: [...state.list, action.item] 
        }
      case 'RESET_MOVIE':
        return {
         ...state, list: []
        }
      default:
        return state
    }
  }

  export default movies
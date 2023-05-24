import { ADD_FAV, REMOVE_FAV,FILTER,ORDER, ADD_CHARACTER, REMOVE_CHARACTER} from "./actions/types"

const initialState ={
    Character:[],
data:[],
myFavorites:[],
almyFavoritesOrigin:[]
}

export default function rootReducer(state=initialState,{type,payload
}){
    switch(type){


        case ADD_CHARACTER:
            if(Array.isArray(payload)){
               return{
            ...state,
            Character:[...state.Character, payload], 
            }
           
            
            
            }
             return{
                ...state,
                Character: [payload, ...state.Character],
            }
            case REMOVE_CHARACTER:
                const newCharacters = state.myFavorites.filter((ch)=>ch.id !== payload)
                return{
                    ...state,
                    myFavorites: newFavorites,
                };


        case ADD_FAV:
            return{
            ...state,
            myFavorites:[...state.myFavorites, payload],
            myFavoritesOrigin:[...state.myFavorites, payload]
            };
            case REMOVE_FAV:
                const newFavorites = state.myFavorites.filter((ch)=>ch.id !== payload)
                return{
                    ...state,
                    myFavorites: newFavorites,
                };
        default:
          return state  
    }
    }

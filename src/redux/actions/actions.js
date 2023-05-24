import { ADD_FAV, FILTER, REMOVE_FAV, ORDER , ADD_CHARACTER, REMOVE_CHARACTER} from "./types";


export function addCharacter(character){
    return{
        type:ADD_CHARACTER,
        payload:character,
        }
}



export function removeCharacter(id){
    return{
        type:REMOVE_CHARACTER,
        payload:id,
    }
}




export function addFav(character){
    return{
        type:ADD_FAV,
        payload:character,
        }
}



export function removeFav(id){
    return{
        type:REMOVE_FAV,
        payload:id,
    }
}

export function filterCards(gender){
return{
    types: FILTER,
    payload:gender,
}
}
export function orderCards(order){
    return{
        types: ORDER,
        payload: order,
    }
    }
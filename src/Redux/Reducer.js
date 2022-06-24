import { GET_ALL_DATA } from "./actionType"

const initState={
    todos:[]
}

export const reducer = (state=initState,{type,payload}) =>{
    switch(type){
        case GET_ALL_DATA :{
            return {...state,todos:payload}
        }

        default :
        return state
    }
}
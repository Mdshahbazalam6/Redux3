import { GET_ALL_DATA } from './actionType'

export const getAllData = ( payload ) =>{
    return{
        type:GET_ALL_DATA,
        payload
    }
}
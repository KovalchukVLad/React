import {RESET_USERS_IS_LOADING,
    SET_USERS_ERROR, SET_USERS_IS_LOADING, SET_USERS}
    from "../actionTypes";

const initial ={
    users: [],
    isLoading: false,
    error: null
}

export const userReducer = (state = initial, action) =>{
    switch (action.type){
        case SET_USERS:{
            return {
                ...state,
                users: action.payload,
                isLoading: false,
            }
        }
        case SET_USERS_IS_LOADING:{
            return {
                ...state,
                isLoading: true
            }
        }
        case RESET_USERS_IS_LOADING:{
            return {
                ...state,
                isLoading: false
            }
        }
        case SET_USERS_ERROR:{
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        default:
            return state;
    }
}
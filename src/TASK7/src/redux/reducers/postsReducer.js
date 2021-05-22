import {RESET_POSTS_IS_LOADING, SET_POSTS_ERROR, SET_POSTS_IS_LOADING, SET_POSTS}
    from "../actionTypes";


const initial ={
    posts: [],
    isLoading: false,
    error: null
}

export const postReducer = (state = initial, action) =>{
    switch (action.type){
        case SET_POSTS:{
            return {
                ...state,
                posts: action.payload,
                isLoading: false,
            }
        }
        case SET_POSTS_IS_LOADING:{
            return {
                ...state,
                isLoading: true
            }
        }
        case RESET_POSTS_IS_LOADING:{
            return {
                ...state,
                isLoading: false
            }
        }
        case SET_POSTS_ERROR:{
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
import {RESET_COMMENTS_IS_LOADING,
    SET_COMMENTS_ERROR,
    SET_COMMENTS_IS_LOADING,
    SET_COMMENTS}
    from "../actionTypes";

const initial ={
    comments: [],
    isLoading: false,
    error: null
}

export const commentReducer = (state = initial, action) =>{
    switch (action.type){
        case SET_COMMENTS:{
            return {
                ...state,
                comments: action.payload,
                isLoading: false,
            }
        }
        case SET_COMMENTS_IS_LOADING:{
            return {
                ...state,
                isLoading: true
            }
        }
        case RESET_COMMENTS_IS_LOADING:{
            return {
                ...state,
                isLoading: false
            }
        }
        case SET_COMMENTS_ERROR:{
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
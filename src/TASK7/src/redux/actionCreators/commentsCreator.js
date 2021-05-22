import {
    SET_COMMENTS_IS_LOADING,
    RESET_COMMENTS_IS_LOADING,
    SET_COMMENTS,
    SET_COMMENTS_ERROR
} from '../actionTypes'


export const setCommentsIsLoading = () => ({type:SET_COMMENTS_IS_LOADING});
export const resetCommentsIsLoading = () => ({type:RESET_COMMENTS_IS_LOADING});
export const setComments = (payload) =>({type: SET_COMMENTS, payload});
export const setCommentsError = (payload) => ({type:SET_COMMENTS_ERROR, payload});

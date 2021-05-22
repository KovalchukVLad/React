import {
    SET_POSTS_IS_LOADING,
    RESET_POSTS_IS_LOADING,
    SET_POSTS,
    SET_POSTS_ERROR
} from '../actionTypes'

export const setPostsIsLoading = () => ({type:SET_POSTS_IS_LOADING});
export const resetPostsIsLoading = () => ({type:RESET_POSTS_IS_LOADING});
export const setPosts = (payload) =>({type: SET_POSTS, payload});
export const setPostsError = (payload) => ({type:SET_POSTS_ERROR, payload});

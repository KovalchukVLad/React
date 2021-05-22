import {combineReducers} from "redux";

import {postReducer} from './postsReducer'
import {userReducer} from './usersReducer'
import {commentReducer} from './commentsReducer'


export const rootReducer = combineReducers({
    posts: postReducer,
    users: userReducer,
    comments : commentReducer
})


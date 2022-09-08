import { counterReducer } from "src/app/counter/state/counter.reducer";
import { AuthReducer } from "src/app/login/state/auth.reducer";
import { AuthState } from "src/app/login/state/auth.state";
import { postReducer } from "src/app/posts/state/posts.reducer";
import { CounterState, PostsState } from "../interfaces/common.interface";

export interface AppState{
    counter : CounterState,
    posts : PostsState,
    AUTH_STATE_NAME : AuthState
}

export const appReducer = {
    counter : counterReducer,
    post : postReducer,
    authReducer : AuthReducer
}
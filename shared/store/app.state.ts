import { Form } from "@angular/forms";
import { counterReducer } from "src/app/counter/state/counter.reducer";
import { AuthReducer } from "src/app/login/state/auth.reducer";
import { AuthState } from "src/app/login/state/auth.state";
import { FormReducer } from "src/app/material-design/angular-material/dropdowns/state/dropdown.reducer";
import { FORM_STATE_NAME } from "src/app/material-design/angular-material/dropdowns/state/dropdown.selector";
import { postReducer } from "src/app/posts/state/posts.reducer";
import {
  CounterState,
  PostsState,
  SharedState,
} from "../interfaces/common.interface";
import { SharedReducer } from "../shared.reducer";
import { SHARED_STATE_NAME } from "../shared.selector";

export interface AppState {
  counter: CounterState;
  posts: PostsState;
  AUTH_STATE_NAME: AuthState;
  [FORM_STATE_NAME]: Form;
  [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
  counter: counterReducer,
  post: postReducer,
  authReducer: AuthReducer,
  [FORM_STATE_NAME]: FormReducer,
  [SHARED_STATE_NAME]: SharedReducer,
};

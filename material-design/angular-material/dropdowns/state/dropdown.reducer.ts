import { Action, createReducer, on } from "@ngrx/store";
import { formData } from "./dropdown.action";
import { initialState } from "./dropdown.state";

const _formReducer = createReducer(
  initialState,
  on(formData, (state, action) => {
    return {
      ...state,
      formData: action.data,
    };
  })
);

export function FormReducer(state: any, action: Action) {
  return _formReducer(state, action);
}

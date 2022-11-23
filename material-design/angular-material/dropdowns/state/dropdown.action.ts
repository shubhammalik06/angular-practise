import { createAction, props } from "@ngrx/store";

// export const selectCountry = createAction('selectCountry', props<{ selectedCountry : string }>());
// export const selectState = createAction('selectState', props<{ state: string }>());
export const FORM_DATA = "[form data] stored success";

export const formData = createAction(FORM_DATA, props<{ data: Array<any> }>());

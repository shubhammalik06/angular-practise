import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Form } from "src/app/shared/interfaces/common.interface";

export const FORM_STATE_NAME = "formData";

export const getForm = createFeatureSelector<Form>(FORM_STATE_NAME);

export const getFormData = createSelector(getForm, (state) => {
  return state;
});

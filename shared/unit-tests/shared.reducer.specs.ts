import { provideMockStore, MockStore } from "@ngrx/store/testing";

import { AppState } from "src/app/shared/store/app.state";
import { SharedState } from "../interfaces/common.interface";
import { setLoadingSpinner } from "../shared.action";
import { SharedReducer } from "../shared.reducer";

let store: MockStore<AppState>;

describe("Shared Reducer tests", () => {
  const initialState: SharedState = {
    showLoading: false,
    errorMessage: "",
  };

  it("Loader is false by default", () => {
    const newState = SharedReducer(initialState, setLoadingSpinner);
    expect(newState.showLoading).toBeFalse(); // expect to be false
  });

  it("Loader is true when change", () => {
    const newState = SharedReducer(
      initialState,
      setLoadingSpinner({ status: true })
    );
    expect(newState.showLoading).toBeTrue(); // expect to be true
    expect(newState).not.toBe(initialState);
  });
});

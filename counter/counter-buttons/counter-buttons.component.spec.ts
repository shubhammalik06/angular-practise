import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { CounterButtonsComponent } from "./counter-buttons.component";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { AppState } from "src/app/shared/store/app.state";
import {
  customChannelName,
  customIncrement,
  decrement,
  increment,
  reset,
} from "../state/counter.actions";
import { CounterState } from "src/app/shared/interfaces/common.interface";
import { counterReducer } from "../state/counter.reducer";

let component: CounterButtonsComponent;
let fixture: ComponentFixture<CounterButtonsComponent>;
let store: MockStore<AppState>;
const TOKEN_REFRESH_INTERVAL = 2000;

describe("CounterButtonsComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterButtonsComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

describe("Store Tests", () => {
  const initialState: CounterState = {
    counter: 0,
    channelName: "testing",
  };

  // Reducers
  it("Check the incremented value", () => {
    const newState = counterReducer(initialState, increment);
    expect(newState.counter).toBe(1); // the increment reducer work
    expect(newState).not.toBe(initialState);
  });

  it("Check the decremented value", () => {
    const newState = counterReducer(initialState, decrement);
    expect(newState.counter).toBe(-1); // the decrement reducer work
  });

  it("Check the custom increment value", () => {
    const newState = counterReducer(
      initialState,
      customIncrement({ value: 20 })
    );
    expect(newState.counter).toBe(20);
  });

  it("Check the custom channel name value", () => {
    const newState = counterReducer(initialState, customChannelName);
    expect(newState.channelName).toBe("new testing");
  });

  it("Check the reset", () => {
    counterReducer(initialState, increment);
    const newState = counterReducer(initialState, reset);
    expect(newState.counter).toBe(0);
  });

  // Check Store -- Dispatch
  // it("Check the dispatch - onIncrement function", fakeAsync(() => {
  //   const storeSpy = spyOn(store, "dispatch").and.callFake(() => {});
  //   tick(TOKEN_REFRESH_INTERVAL);
  //   component.onIncrement();
  //   fixture.detectChanges();
  //   expect(storeSpy).toHaveBeenCalled();
  // }));

  // it("Check the dispatch - onDecrement function", fakeAsync(() => {
  //   const storeSpy = spyOn(store, "dispatch").and.callFake(() => {});
  //   tick(TOKEN_REFRESH_INTERVAL);
  //   component.onDecrement();
  //   fixture.detectChanges();
  //   expect(storeSpy).toHaveBeenCalled();
  // }));

  // it("Check the dispatch - onReset function", fakeAsync(() => {
  //   const storeSpy = spyOn(store, "dispatch").and.callFake(() => {});
  //   tick(TOKEN_REFRESH_INTERVAL);
  //   component.onReset();
  //   fixture.detectChanges();
  //   expect(storeSpy).toHaveBeenCalled();
  // }));
});

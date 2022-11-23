import { ComponentFixture, TestBed } from "@angular/core/testing";
import { getCounterState } from "../state/counter.selector";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { CounterComponent } from "./counter.component";
import { AppState } from "src/app/shared/store/app.state";

describe("CounterComponent", () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

// describe('App State Selectors', () => {
//   it('should return app state', () => {
//   expect(getCounterState.projector()).not.toBeUndefined();
//   });
// });

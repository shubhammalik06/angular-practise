import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { CustomCounterInputComponent } from "./custom-counter-input.component";

describe("CustomCounterInputComponent", () => {
  let component: CustomCounterInputComponent;
  let fixture: ComponentFixture<CustomCounterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomCounterInputComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomCounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

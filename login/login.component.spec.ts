import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { AppState } from "../shared/store/app.state";
import { AuthService } from "../Services/auth.service";
import { Observable, of, ReplaySubject } from "rxjs";
import { AuthEffects } from "./state/auth.effects";
import { AuthState } from "./state/auth.state";
import { provideMockActions } from "@ngrx/effects/testing";
import * as AppActions from "./state/auth.action";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FormGroup } from "@angular/forms";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore<AppState>;
  let httpService: AuthService;
  let actions$: Observable<any>;
  let effects: AuthEffects;
  const initialState: AuthState = {};

  const mockUsers = [
    {
      email: "shubham@mail.com",
      password: "xyz",
    },
  ];

  class MockUserService {
    login() {
      return of(mockUsers);
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [LoginComponent],
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: AuthService, useClass: MockUserService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    effects = TestBed.inject(AuthEffects);
    httpService = TestBed.inject(AuthService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // Effect Checking
  it("should check the login API", (done) => {
    const spy = spyOn(httpService, "login").and.callThrough();
    actions$ = of(
      AppActions.loginStart({ email: "shubham@mail.com", password: "xyz" })
    );
    const sub = effects.login.subscribe((result) => {
      expect(result).toEqual(AppActions.loginSuccess());
      expect(spy).toHaveBeenCalledTimes(1);
      done();
    });
    setTimeout(() => sub.unsubscribe());
  });
});

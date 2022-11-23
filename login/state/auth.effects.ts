import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AuthService } from "src/app/Services/auth.service";
import {
  setErrorMessage,
  setLoadingSpinner,
} from "src/app/shared/shared.action";
import { AppState } from "src/app/shared/store/app.state";
import { loginStart, loginSuccess } from "./auth.action";

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  login = createEffect(() => {
    return this.actions.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        this.store.dispatch(setLoadingSpinner({ status: true }));
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            console.log(data);
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return loginSuccess();
          }),
          catchError((errorResponse) => {
            const errorMessage = this.authService.getErrorMessages(
              errorResponse.message
            );
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  loginRedirect = createEffect(
    () => {
      return this.actions.pipe(
        ofType(loginSuccess),
        tap((action) => {
          this.router.navigate(["/"]);
        })
      );
    },
    { dispatch: false }
  );
}

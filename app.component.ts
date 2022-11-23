import { Component, isDevMode, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getErrorMessage, getLoading } from "./shared/shared.selector";
import { AppState } from "./shared/store/app.state";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "material-design";
  showLoading!: Observable<boolean>;
  errorMessage!: Observable<string>;

  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);

    if (isDevMode()) {
      console.log("Development!");
    } else {
      console.log("Production!");
    }
  }
}

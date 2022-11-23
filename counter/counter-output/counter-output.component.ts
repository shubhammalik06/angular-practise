import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getCounter } from "src/app/counter/state/counter.selector";
import { AppState } from "src/app/shared/store/app.state";

@Component({
  selector: "app-counter-output",
  templateUrl: "./counter-output.component.html",
  styleUrls: ["./counter-output.component.scss"],
})
export class CounterOutputComponent implements OnInit {
  counter!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((data) => {
      console.log("counter name");
      this.counter = data;
    });
  }
}

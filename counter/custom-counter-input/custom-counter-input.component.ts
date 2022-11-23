import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  customChannelName,
  customIncrement,
} from "src/app/counter/state/counter.actions";
import { getChannelName } from "src/app/counter/state/counter.selector";
import { AppState } from "src/app/shared/store/app.state";

@Component({
  selector: "app-custom-counter-input",
  templateUrl: "./custom-counter-input.component.html",
  styleUrls: ["./custom-counter-input.component.scss"],
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  channelName!: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe((data) => {
      this.channelName = data;
    });
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  updateChannelName() {
    this.store.dispatch(customChannelName());
  }
}

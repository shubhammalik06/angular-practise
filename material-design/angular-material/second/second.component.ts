import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Form } from "src/app/shared/interfaces/common.interface";
import { AppState } from "src/app/shared/store/app.state";
import { getFormData } from "../dropdowns/state/dropdown.selector";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.scss"],
})
export class SecondComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  myForm: any;
  formData!: any;

  ngOnInit(): void {
    this.store.select(getFormData).subscribe((data) => {
      this.formData = data.formData;
      console.log(this.formData);
      this.form(this.formData);
    });
  }

  form(data: any) {
    this.myForm = new FormGroup({
      name: new FormControl({
        value: data.name ? data.name : "",
        disabled: true,
      }),
      email: new FormControl({
        value: data.email ? data.email : "",
        disabled: true,
      }),
      countryDropdown: new FormControl({
        value: data.countryDropdown.country ? data.countryDropdown.country : "",
        disabled: true,
      }),
      stateDropdown: new FormControl({
        value: data.stateDropdown ? data.stateDropdown : "",
        disabled: true,
      }),
    });
  }
}

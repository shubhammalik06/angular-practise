import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/store/app.state";
import { countries } from "../../../shared/countries";
import { formData } from "./state/dropdown.action";

@Component({
  selector: "app-dropdowns",
  templateUrl: "./dropdowns.component.html",
  styleUrls: ["./dropdowns.component.scss"],
})
export class DropdownsComponent implements OnInit {
  stateList!: Array<string>;
  countries: any = countries;

  selectedStateName!: string;
  selectedCountryName!: string;

  myForm: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      countryDropdown: new FormControl("", Validators.required),
      stateDropdown: new FormControl("", Validators.required),
    });
  }

  selectedState(value: any) {
    this.selectedStateName = value;
  }

  selectedCountry(value: any) {
    this.selectedCountryName = value.country;
    this.stateList = value.states;
  }

  onSubmit(form: FormGroup) {
    this.store.dispatch(formData({ data: form.value }));
  }
}

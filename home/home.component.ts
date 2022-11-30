import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})

export class HomeComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  showInput: boolean = false;
  
  toppingsGroup: Record<string, boolean> = {
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  }

  jsonArray: any = [{}];
  formString!: string;

  ngOnInit(): void {
    this.makeForm();
  }

  updateForm!: FormGroup;
  ELEMENT_DATA_UPDATE: any[] = [];

  myJobFunctionControl = new FormControl();
  optionsJobFunction: string[] = ['Operations', 'Production', 'Manufacturing'];

  myTitleControl = new FormControl();
  optionsTitle: string[] = ['HR', 'Developer', 'Tester', 'MD', 'CEO', 'Director'];

  keyArray: any[] = [];

  makeForm() {
    //dumy randomly geneated fields
    this.ELEMENT_DATA_UPDATE = [
      {
        first_name: 'abc',
        last_name: 'xyz',
        job_function: 'Production',
        title: 'Developer',
        email: 'abc@abx.com',
        phone: 7945612304
      }
    ];

    for (let obj of this.ELEMENT_DATA_UPDATE) {
      console.log("object length:", this.ELEMENT_DATA_UPDATE.length);
      for (let key in obj) {
        this.keyArray.push({ 'key': key, 'value': obj[key], 'name': (key.charAt(0).toUpperCase() + key.substr(1).toLowerCase()).replace(/_/g, ' ') });
      }
      break;
    }
    console.log(this.keyArray);
    console.log(this.ELEMENT_DATA_UPDATE[0]);

    this.updateForm = new FormGroup({})

    for (let formModule of this.keyArray) {
      this.updateForm.addControl(formModule.key,
        new FormControl(formModule.Value, formModule.validators))
    }

    // console.log(this.formString);
    // this.jsonArray = (this.formString);
    // this.updateForm = this.formBuilder.group(this.jsonArray);
  }

  toppings = this.formBuilder.group(this.toppingsGroup);

  updateState(event: any) {
    const { source, checked } = event;

    if (source) {
      const { name } = source;

      this.toppingsGroup[name] = checked
    }
  }

}
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.scss"],
})
export class ReactiveFormsComponent implements OnInit {
  myForm: any;
  @Output() showTab = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required, Validators.minLength(15)]],
    });
  }

  onSubmit(form: FormGroup) {
    console.log("Valid?", form.valid); // true or false
    console.log("Name", form.value.name);
    console.log("Email", form.value.email);
    console.log("Message", form.value.message);
  }



  addNewItem(value:boolean) {
    this.showTab.emit(value);
  }
}

import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Post } from "src/app/shared/interfaces/common.interface";
import { AppState } from "src/app/shared/store/app.state";
import { addPost } from "../state/posts.actions";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  MIN_TITLE_LENGTH = 5;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(this.MIN_TITLE_LENGTH),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }

    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    this.store.dispatch(addPost({ post }));
    this.postForm.reset();
  }

  showDescriptionErrors() {
    const descriptionForm = this.postForm.get("description");

    if (descriptionForm?.touched && !descriptionForm.valid) {
      if (descriptionForm?.errors?.["required"]) {
        return "Description is required";
      }

      if (descriptionForm?.errors?.["minlength"]) {
        return "Min length is " + this.MIN_TITLE_LENGTH;
      }
    }

    return;
  }
}

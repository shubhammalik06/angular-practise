import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/common.interface';
import { AppState } from 'src/app/shared/store/app.state';
import { getPostsById } from '../state/post.selector';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {

  post! : Post;
  postForm! : FormGroup;
  postSubscription! : Subscription;

  constructor(private route : ActivatedRoute,
    private store : Store<AppState>) { }

  ngOnInit(): void {
    this.postSubscription = this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.store.select(getPostsById, { id }).subscribe(data => {
        this.post = data;
        this.onUpdatePost();
      });
    });
  }

  onUpdatePost(){
    this.postForm = new FormGroup({
      title : new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(5)
      ]),
      description : new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(5)
      ])
    })
  }

  ngOnDestroy(){
    if(this.postSubscription){
      this.postSubscription.unsubscribe();
    }
  }
}

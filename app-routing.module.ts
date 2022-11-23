import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter/counter.component";
import { FirstComponent } from "./first/first.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { DropdownsComponent } from "./material-design/angular-material/dropdowns/dropdowns.component";
import { MatGridListComponent } from "./material-design/angular-material/mat-grid-list/mat-grid-list.component";
import { MatSliderComponent } from "./material-design/angular-material/mat-slider/mat-slider.component";
import { SecondComponent } from "./material-design/angular-material/second/second.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { PostsComponent } from "./posts/posts.component";
import { UpdateComponent } from "./posts/update/update.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { TabsComponent } from "./tabs/tabs.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/tabs",
  },
  {
    path: "tabs",
    component: TabsComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "dropdown",
    component: DropdownsComponent,
  },
  {
    path: "next",
    component: SecondComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "first",
    component: FirstComponent,
  },
  {
    path: "mat-slider",
    component: MatSliderComponent,
  },
  {
    path: "mat-grid-list",
    component: MatGridListComponent,
  },
  {
    path: "reactive-forms",
    component: ReactiveFormsComponent,
  },
  {
    path: "counter",
    component: CounterComponent,
  },
  {
    path: "rxjs",
    component: RxjsComponent,
  },
  // {
  //   path : 'next',
  //   component : SecondComponent
  // },

  {
    path: "posts",
    component: PostsComponent,
    children: [
      {
        path: "add",
        component: AddPostComponent,
      },
      {
        path: "update/:id",
        component: UpdateComponent,
      },
    ],
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FirstComponent } from "./first/first.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material-design/material.module";
import { CounterComponent } from "./counter/counter/counter.component";
import { CounterOutputComponent } from "./counter/counter-output/counter-output.component";
import { CounterButtonsComponent } from "./counter/counter-buttons/counter-buttons.component";
import { StoreModule } from "@ngrx/store";
import { CustomCounterInputComponent } from "./counter/custom-counter-input/custom-counter-input.component";
import { appReducer } from "./shared/store/app.state";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment.prod";
import { PostsComponent } from "./posts/posts.component";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { UpdateComponent } from "./posts/update/update.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginComponent } from "./login/login.component";
import { EffectsModule } from "@ngrx/effects";

import { HttpClientModule } from "@angular/common/http";
import { AuthEffects } from "./login/state/auth.effects";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { HomeComponent } from "./home/home.component";
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FirstComponent,
    ReactiveFormsComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
    PostsComponent,
    AddPostComponent,
    UpdateComponent,
    RxjsComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    MatTabsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

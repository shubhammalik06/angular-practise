import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ResolveGuard } from 'src/app/Shared/guard/resolve.guard';
import { AboutModule } from './about/about.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomStyleDirective } from './Shared/custom-style.directive';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule
  ],
  providers: [ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

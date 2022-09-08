import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { CustomStyleDirective } from '../Shared/custom-style.directive';


const routes : Routes = [
  {
    path : '',
    component : AboutComponent
  }
]

@NgModule({
  declarations: [AboutComponent,
    CustomStyleDirective],
  imports: [
    CommonModule,
    
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }

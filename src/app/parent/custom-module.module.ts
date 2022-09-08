import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent.component';

const routes : Routes = [
  {
    path : '',
    component : ParentComponent
  }
]

@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class CustomModuleModule { }

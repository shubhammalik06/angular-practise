import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MatGridListComponent } from './angular-material/mat-grid-list/mat-grid-list.component';
import { MatSliderComponent } from './angular-material/mat-slider/mat-slider.component';
import {MatDividerModule} from '@angular/material/divider';

const MaterialComponents = [
  MatSliderModule,
  MatGridListModule,
  MatButtonModule,
  MatDividerModule
];

@NgModule({
  declarations: [
    MatSliderComponent,
    MatGridListComponent
  ],
  imports: [
    CommonModule,
    MaterialComponents,
  ],
  providers: [],
  bootstrap: []
})
export class MaterialModule { }

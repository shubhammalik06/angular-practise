import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSliderModule } from "@angular/material/slider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListComponent } from "./angular-material/mat-grid-list/mat-grid-list.component";
import { MatSliderComponent } from "./angular-material/mat-slider/mat-slider.component";
import { MatDividerModule } from "@angular/material/divider";
import { DropdownsComponent } from "./angular-material/dropdowns/dropdowns.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { SecondComponent } from "./angular-material/second/second.component";
import { RouterModule, Routes } from "@angular/router";

const MaterialComponents = [
  MatSliderModule,
  MatGridListModule,
  MatButtonModule,
  MatDividerModule,
  MatMenuModule,
  MatSelectModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    MatSliderComponent,
    MatGridListComponent,
    DropdownsComponent,
    SecondComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponents,
    MatInputModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [],
})
export class MaterialModule {}

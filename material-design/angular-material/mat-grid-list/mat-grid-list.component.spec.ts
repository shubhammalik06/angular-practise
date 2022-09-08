import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import { MatGridListComponent } from './mat-grid-list.component';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import { AppModule } from 'src/app/app.module';

let loader: HarnessLoader;
let component : MatGridListComponent;
let fixture: ComponentFixture<MatGridListComponent>;

describe('my-MatGridListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ declarations: [MatGridListComponent]})
        .compileComponents();
       
    fixture = TestBed.createComponent(MatGridListComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}
);

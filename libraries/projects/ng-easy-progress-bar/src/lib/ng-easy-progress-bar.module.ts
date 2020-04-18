import { NgModule } from '@angular/core';
import { NgEasyProgressBarComponent } from './ng-easy-progress-bar.component';
import { CircleProgressBarComponent } from './circle-progress-bar/circle-progress-bar.component';



@NgModule({
  declarations: [NgEasyProgressBarComponent, CircleProgressBarComponent],
  imports: [
  ],
  exports: [NgEasyProgressBarComponent]
})
export class NgEasyProgressBarModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgEasyProgressBarModule } from 'projects/ng-easy-progress-bar/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgEasyProgressBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

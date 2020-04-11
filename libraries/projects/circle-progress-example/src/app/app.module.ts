import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleProgressModule } from 'projects/circle-progress/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CircleProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

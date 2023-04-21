import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day1normalModule } from './pages/day1normal/day1normal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Day1normalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

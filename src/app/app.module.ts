import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day1normalModule } from './pages/day1normal/day1normal.module';
import{ HttpClientModule, HTTP_INTERCEPTORS }from '@angular/common/http';
import { LoginComponent } from './partials/login/login.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './partials/menubar/menubar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenubarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Day1normalModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot()
  ],
  exports:[
    MenubarComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

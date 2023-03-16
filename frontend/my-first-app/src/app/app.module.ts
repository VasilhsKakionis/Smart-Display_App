import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StandardImagesComponent } from './standard-images/standard-images.component';
import { BarsComponent } from './bars/bars.component';
import { SevenSegmentDisplayComponent } from './seven-segment-display/seven-segment-display.component';
import { UnderBarElementsComponent } from './under-bar-elements/under-bar-elements.component';
import { TestCreateComponent } from './test-create/test-create.component';
import { TestLoginComponent } from './test-login/test-login.component';
import { TestApiReqComponent } from './test-api-req/test-api-req.component';

@NgModule({
  declarations: [
    AppComponent,
    StandardImagesComponent,
    BarsComponent,
    SevenSegmentDisplayComponent,
    UnderBarElementsComponent,
    TestCreateComponent,
    TestLoginComponent,
    TestApiReqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

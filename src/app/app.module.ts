import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestinputComponent } from './testinput/testinput.component';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstDataComponent } from './gst-data/gst-data.component';
import { HttpClientModule } from '@angular/common/http';

import{ BusinessService } from './business.service';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestinputComponent,
    GstAddComponent,
    GstDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlimLoadingBarModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }

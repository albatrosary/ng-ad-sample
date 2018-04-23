import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Adal5Service, Adal5HTTPService } from 'adal-angular5';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Adal5Service,
    { 
      provide: Adal5HTTPService,
      useFactory: Adal5HTTPService.factory,
      deps: [HttpClient, Adal5Service]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

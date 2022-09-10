import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote/quote.component';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './routing/app-routing.module';
import { QuoteListComponent } from './components/quote-list/quote-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

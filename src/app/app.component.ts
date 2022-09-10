import { Component } from '@angular/core';
import { QuoteDate } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-quotes-app';

  quotes: QuoteDate[] = [];

  setQuote(quote: QuoteDate): void {
    this.quotes.push(quote);
  }
}

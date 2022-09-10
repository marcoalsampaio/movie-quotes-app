import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote, QuoteDate } from 'src/app/quote';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Output() addQuoteEvent = new EventEmitter<QuoteDate>();

  quote?: Quote;
  errorMsg = false;
  date?: string;
  constructor(private http: HttpService, private storage: StorageService) { }

  ngOnInit(): void {
    this.fetchQuote();
    console.log()
  }

  fetchQuote(): void {
    this.date = this.storage.get("date");
    this.errorMsg = false;
    let date = new Date().toLocaleString("en-GB")
    this.http.getMovieQuote().subscribe(
      {
        next: (q) => {
          this.quote = q;
          this.storage.set("date", date);
          this.addQuote(date, this.quote);
        },
        error: (err) => this.errorMsg = true
      });

  };

  addQuote( d: string, q?: Quote): void {
    let quoteDate: QuoteDate = {
      date: d,
      quoteData: q
    }
    this.addQuoteEvent.emit(quoteDate);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from 'src/app/quote';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote?: Quote;
  errorMsg = false;
  date?: string;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.fetchQuote();
    console.log()
  }


  fetchQuote(): void {
    this.date = new Date().toLocaleString("en-GB")
    this.errorMsg = false;
    this.http.getMovieQuote().subscribe(
      {
        next: (q) => this.quote = q,
        error: (err) => this.errorMsg = true
      });
  };
}

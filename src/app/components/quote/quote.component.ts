import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote, QuoteDate } from 'src/app/quote';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote?: Quote; //quote varible
  errorMsg = false;
  date?: string;

  constructor(private http: HttpService, private storage: StorageService) { }

  ngOnInit(): void {
    this.fetchQuote();
  }

  fetchQuote(): void { //fetch a new Quotes 

    this.date = this.storage.get("date"); //Get the last date quote
    this.errorMsg = false;
    let date = new Date().toLocaleString("en-GB") //formating the date YYYY/MM/DD, HH:MM:SS
    this.http.getMovieQuote().subscribe( 
      {
        next: (q) => {
          this.quote = q; //Set the var Quote equal to the return quote
          this.storage.set("date", date); //set the date of the call
          this.addQuote(date, this.quote); 
        },
        error: (err) => this.errorMsg = true //verify is there is an error
      });

  };

  addQuote( d: string, q?: Quote): void { 
    let quoteDate: QuoteDate = { //create a new OBJ to send to the List
      created_date: d, //created_date from the quote
      quoteData: q //quote data
    }
    this.storage.setQuote(quoteDate); //Call the storage service to save it 
  }

}

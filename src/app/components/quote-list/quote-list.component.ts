import { Component, OnInit } from '@angular/core';
import { QuoteDate } from 'src/app/quote';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
})
export class QuoteListComponent implements OnInit {
  quotes: QuoteDate[] = []; //Quotes array
  loading: boolean = false; 
  searchQuotes: QuoteDate[] = [];
  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.showQuotes(); 
  }

  showQuotes(): void {
    const storageQuotes: QuoteDate[] = this.storage.get('quotes'); //Get the quotes from the local storage
    const sessionQuotes = this.storage.getQuotes(); //Get the session quotes

    if (this.verifyQuotes(storageQuotes)) { //verify if the local storage returned some quotes
      this.quotes = [...storageQuotes]; //save the quotes in the quotes Array
      this.storage.remove('quotes'); //remove the quotes from the local storage
    } else if (this.verifyQuotes(sessionQuotes)) { //verify if the session have some quotes
      this.quotes = [...this.quotes, ...sessionQuotes]; //add the quotes to the array
    } 

    if (this.verifyQuotes(this.quotes)) { //verify if the quotes assay is not empty
      this.searchQuotes = this.quotes; //save the quotes in a aux var
      this.loading = true; //quotes apper on the screen
    }
  }

  verifyQuotes(quotes: QuoteDate[]): boolean { //verofy if the returnd quotes arrays are not empty
    return quotes.length !== 0;
  }

  persist(): void { //Persist data, calls the storage service po save the data localy
    this.storage.set('quotes', this.quotes);
  }

  search(text: string): void { //Search the quotes that containt the inputed string
    setTimeout(() => {
    this.quotes = this.searchQuotes.filter((q) => q.quoteData?.quote.includes(text));
    }, 300)
  }
}

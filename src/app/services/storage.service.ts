import { Injectable } from '@angular/core';
import { QuoteDate } from '../quote';

//Service used to save the data on the local storage and pass data between pages

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  localStorage: Storage;

  quotes: QuoteDate[] = [];

  constructor() {
    this.localStorage = window.localStorage; //initialization of the local storage
   }

  get(key: string): any { //Getter to obtain data from the localStorage, returns [] if empty or null
    if(this.isLocalStorageSupported){
      return JSON.parse(this.localStorage.getItem(key) || '[]');
    }
    return null;
  }

  set(key: string, value: any): boolean{ //Setter to save the data on the local storage
    if(this.isLocalStorageSupported){
      this.localStorage.setItem(key, JSON.stringify(value));
      return true;
    }

    return false;
  }

  remove(key: string): boolean { //Remove a item  from the local storage
    if(this.isLocalStorageSupported){
      this.localStorage.removeItem(key);
      return true;
    }

    return false;
  }

  get isLocalStorageSupported(): boolean { //Verify if the local storage is supported by the browser
    return !! this.localStorage;
  }

  setQuote(quote: QuoteDate): void { //Set the Quotes in a array to share between pages
    this.quotes.push(quote);
  }

  getQuotes(): QuoteDate[] {  // Getter of the Quotes to the Quote List
    return this.quotes;
  }
}

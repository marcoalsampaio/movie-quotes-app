import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Quote } from '../quote';

//service used to get the Data from the API

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  url = "https://movie-quote-api.herokuapp.com";


  getMovieQuote(): Observable<Quote> { //Fecth the API using the HttpClient module
    let quoteURL = this.url + "/v1/quote/";
    return this.http.get<Quote>(quoteURL) //return the data formated 
  }

}

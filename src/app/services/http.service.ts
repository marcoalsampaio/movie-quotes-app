import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap} from 'rxjs';
import { Quote } from '../quote';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  url = "https://movie-quote-api.herokuapp.com";


  getMovieQuote(): Observable<Quote> {
    let quoteURL = this.url + "/v1/quote/";
    return this.http.get<Quote>(quoteURL)
  }


  handlerError(){

  }
}

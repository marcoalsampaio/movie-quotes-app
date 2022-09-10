
export interface Quote{ //Used interface to recive the data from the API
  quote: string;
  role: string;
  show: string;
  contain_adult_lang: boolean;
}
 
export interface QuoteDate{  //Used interface to save the data on localstorage to persiste the data and show on the Quote List
  created_date: string,
  quoteData?: Quote
}

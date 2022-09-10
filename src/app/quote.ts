
export interface Quote{
  quote: string;
  role: string;
  show: string;
  contain_adult_lang: boolean;
}


export interface QuoteDate{
  date: string,
  quoteData?: Quote
}

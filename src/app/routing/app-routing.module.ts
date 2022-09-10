import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteComponent } from '../components/quote/quote.component';
import { QuoteListComponent } from '../components/quote-list/quote-list.component';


//Routes 
const routes: Routes = [
  { path: '', redirectTo: '/quote', pathMatch: 'full' },
  {path: 'quote', component: QuoteComponent},
  {path: 'list', component: QuoteListComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

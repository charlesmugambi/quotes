import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    QuoteFormComponent,
    QuotesComponent,
    QuotesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

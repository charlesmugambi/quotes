import { Component, OnInit, } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  //Trending quotes displayed on Homepage
  quotes = [
    new Quote(0, 'Get Rich or Die Trying', '"50" Cent', new Date(2002, 3, 14), 'Stamura', 0, 0),
    new Quote(1, 'The Dream is Free but the Hustle is sold separately', 'Unknown', new Date(1992, 7, 21), 'Moringa', 0, 0),
    new Quote(2, 'Life is what happens when you are busy making other plans', 'John Lennon', new Date(1999, 11, 28), 'Mchungcheng', 0, 0),
  ]

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)

  }

  constructor() { }

  ngOnInit() {
  }

}

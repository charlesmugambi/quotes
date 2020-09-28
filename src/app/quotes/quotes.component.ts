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
    new Quote(0, '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”', 'Albert Einstein', new Date(1940, 3, 14), 'Albert Einstein', 0, 0),
    new Quote(1, '“Always forgive your enemies; nothing annoys them so much.”', ' Oscar Wilde', new Date(1840, 7, 21), '', 0, 0),
    new Quote(2, '“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.”', 'Marilyn Monroe', new Date(1959, 11, 28), 'Marilyn Monroe', 0, 0),
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

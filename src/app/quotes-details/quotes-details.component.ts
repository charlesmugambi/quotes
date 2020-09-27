import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  upvote = 0
  downvote = 0

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() isPlus = new EventEmitter<boolean>();
  @Output() isMinus = new EventEmitter<boolean>();


  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  //upvote and downvote
  votePlus(plus: boolean) {
    this.isPlus.emit(plus);
  }
  voteMinus(minus: boolean) {
    this.isMinus.emit(minus);
  }

  like() {
    this.upvote = this.upvote += 1;
  }
  hate() {
    this.downvote = this.downvote += 1;
  }


  constructor() { }

  ngOnInit() {
  }

}

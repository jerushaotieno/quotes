import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input()
  quote!: Quote;
  @Output() isComplete = new EventEmitter();

  quoteDelete(){
    this.isComplete.emit();
  }

  Upvote(){
    this.quote.upvote++    
  }

  Downvote(){
    this.quote.downvote++
  }

  constructor() { }

  ngOnInit(): void {
  }

}

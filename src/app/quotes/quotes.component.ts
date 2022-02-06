import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('Jay', 'Dreams', 'When you have a dream, you’ve got to grab it and never let go.', 'Carol Burnett', new Date(2022,2,5), 0,0),
    new Quote('Lucy', 'Willpower', 'Nothing is impossible. The word itself says ‘I’m possible!', 'Audrey Hepburn', new Date(2022,2,4), 0,0),
    new Quote('Jack', 'Willpower', 'There is nothing impossible to they who will try.', 'Alexander the Great', new Date(2022,2,3), 0,0),
    new Quote('Abdul', 'Time', 'The bad news is time flies. The good news is you are the pilot.', 'Michael Altshuler', new Date(2022,2,2), 0,0),
    new Quote('Wanjiru', 'Hardship', 'Keep your face always toward the sunshine, and shadows will fall behind you.', 'Walt Whitman', new Date(2022,2,2),0,0),
    new Quote('Othuol', 'Success', 'Success is not final, failure is not fatal: it is the courage to continue that counts', 'Winston Churchill', new Date(2022,2,1),0,0)
  ];

  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(isComplete: any, index: number){
    if (isComplete) {
      let toAddNewQuote = confirm(`Are you sure you want to add ${this.quotes[index].name}?`)

      if (toAddNewQuote){
        this.quotes.splice(index,1)
      }
    }
  }

  // addNewQuote(quote: Quote){
  //   let quoteLength = this.quotes.length;
  //   quote.id = quoteLength+1;
  //   quote.completeDate = new Date(quote.completeDate)
  //   this.quotes.push(quote)
  // }

constructor(){}

ngOnInit(){

}

}

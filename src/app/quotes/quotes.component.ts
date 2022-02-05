import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  title = 'Share a Quote';
  quotes:Quote[] = [
    new Quote(1, 'Jay', 'Dreams', 'When you have a dream, you’ve got to grab it and never let go.', 'Carol Burnett', new Date(2022,2,5), 0,0),
    new Quote(2, 'Lucy', 'Willpower', 'Nothing is impossible. The word itself says ‘I’m possible!', 'Audrey Hepburn', new Date(2022,2,4), 0,0),
    new Quote(3, 'Jack', 'Willpower', 'There is nothing impossible to they who will try.', 'Alexander the Great', new Date(2022,2,3), 0,0),
    new Quote(4, 'Abdul', 'Time', 'The bad news is time flies. The good news is you are the pilot.', 'Michael Altshuler', new Date(2022,2,2), 0,0),
    new Quote(5, 'Wanjiru', 'Hardship', 'Keep your face always toward the sunshine, and shadows will fall behind you.', 'Walt Whitman', new Date(2022,2,2),0,0),
    new Quote(6, 'Othuol', 'Success', 'Success is not final, failure is not fatal: it is the courage to continue that counts', new Date(2022,2,1),0,0)
  ];

  
}

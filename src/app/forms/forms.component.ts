import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  newQuote = new Quote(0,"","","",new Date());
  addQuote: any;
  @Output () addQuotes = new EventEmitter<Quote>();
  submitQuote(){
    this.addQuote.emit(this.newQuote);
      }
  
  constructor() { }
 

  ngOnInit(): void {
  }

}

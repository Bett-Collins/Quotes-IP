import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  newQuote = new Quote(0,"","","",new Date());
  addQuote: any;
  
  submitQuote(){
    this.addQuote.emit(this.newQuote);
      }
  
  constructor() { }
 

  ngOnInit(): void {
  }

}

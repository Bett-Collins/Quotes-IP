import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

quotes:Quote[] =[
  new Quote (1,'Collins','Martin-luther', 'life qoutes -life is hard'),
  new Quote (1,'Collins','Martin-luther', 'life qoutes-life is hard'),
  new Quote (1,'Collins','Martin-luther', 'life qoutes-life is hard'),
  new Quote (1,'Collins','Martin-luther', 'life qoutes-life is hard'),
  new Quote (1,'Collins','Martin-luther', 'life qoutes-life is hard'),



];
toggleDetails(index:number){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
completeQuote(isComplete: any, index: any){
  if (isComplete) {
    this.quotes.splice(index,1);
  }
 
  QuoteComponent.constructor(); { }

  this.ngOnInit(); void {
  }

}
}
  function deleteQuote(isRead: any, any: any, index: any, number: any) {
    throw new Error('Function not implemented.');
  }

  function isRead(isRead: any, any: any, index: any, number: any) {
    throw new Error('Function not implemented.');
  }



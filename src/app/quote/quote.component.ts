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
  new Quote (1,'Collins','Martin-luther', 'life quotes -life is hard',new Date(2016,3,16)),
  new Quote (1,'Collins','Martin-luther', 'life qoutes -life is hard',new Date(2017,10,4)),
  new Quote (1,'Collins','Martin-luther', 'life qoutes-life is hard',new Date(2018,6,12)),
  new Quote (1,'Collins','Martin-luther', 'life qoutes-life is hard',new Date(2019,11,2)),
  new Quote (1,'Collins','Martin-luther', 'life qoutes-life is hard',new Date(2022,9,28)),
 



];

toggleDetails(index:number){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
completeQuote(isComplete: any, index: any){
  if (isComplete) {
    confirm("Are you sure you want to delet this quote")
    
    this.quotes.splice(index,1);
  }
  addNewQuote(this.quotes);{
    let goalLength = this.quotes.length;
    // Quote.id = quoteLength+1;
    Quote.completeDate = new Date(Quote.completeDate)
    Quote.push(Quote)
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


function addNewQuote(quote: any) {
  throw new Error('Function not implemented.');
}

  
    
  
// function likeButtonclick() {
//   throw new Error('Function not implemented.');
// }

// function dislikeButtonclick() {
//   throw new Error('Function not implemented.');
// }


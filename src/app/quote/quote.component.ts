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
  new Quote (1,'Religious','― Craig D. Lounsbrough','I am thankful that there are those among us who have sacrificed dearly on behalf of us. And I ardently pray to God that I might be less like myself and more like them.'
  ,new Date(2016,3,16)),
 new Quote (1,'Revolutionary','Martin-luther','We must accept finite disappointment, but never lose infinite hope.',new Date(2017,10,4)),
 new Quote (1,'Liberational','– Marcus Garvey', 'It is your mind that rules the body. You cannot go further than that mind to seek truth and to know truth and to react to truth.' ,new Date(2018,6,12)),
  // new Quote (1,'Collins','Muammar Gaddafi', 'Man's freedom is lacking if somebody else controls what he needs, for need may result in man's enslavement of man.' ,new Date(2019,11,2)),
  // new Quote (1,'Collins','― Malcolm X, By Any Means Necessary', 'You'are not to be so blind with patriotism that you can't face reality.Wrong is wrong, no matter who does it or says it.'
  // ,new Date(2022,9,28)),
 



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


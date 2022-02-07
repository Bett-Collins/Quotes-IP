import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-qoute-details',
  templateUrl: './qoute-details.component.html',
  styleUrls: ['./qoute-details.component.css']
})
export class QouteDetailsComponent implements OnInit {
  numberOfLike: number =0;
  numberOfDislike: number=0;




  @Input() quote:Quote | undefined;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  // numberOfLike:number = 0;
likeButtonclick(){
  this.numberOfLike++;
  }
  
  dislikeButtonclick(){
    this.numberOfDislike--;
    }
  constructor() { }

  ngOnInit(): void {
  }

}

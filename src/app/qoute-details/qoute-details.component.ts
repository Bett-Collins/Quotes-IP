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

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  numberOfLikes:number = 0;
likeButtonclick(){
  this.numberOfLikes++;
  }
  
  dislikeButtonclick(){
    this.numberOfLikes--;
    }
  constructor() { }

  ngOnInit(): void {
  }

}

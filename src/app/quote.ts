export class Quote {
   
    showDescription: boolean;
  static completeDate: string | number | Date;
  static id: any;
  static push: any;
    constructor(public id: number,public name: string,public author: string,public details: string, public completeDate:Date){
      this.showDescription=false;

    }
}


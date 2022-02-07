export class Quote {
  name:string;
  description:string;
  quote:string;
  author:string;
  completeDate:Date;
  upvote:number;
  downvote:number;
  showDescription: boolean;
    constructor(name: string, description: string, quote: string, author: string, completeDate: Date){
      this.name = name;
      this.description = description;
      this.quote = quote;
      this.author = author;
      this.completeDate = completeDate;
      this.upvote=0;
      this.downvote=0;
      this.showDescription=false;
    }
  }

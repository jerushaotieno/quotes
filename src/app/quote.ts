export class Quote {
    public showDescription: boolean;
    constructor(public name: string, public description: string, public quote: string, public author: string, public completeDate: Date, public upvote: number, public downvote: number){
      this.showDescription=false;
    }
  }

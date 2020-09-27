export class Quote {
    public showDescription: boolean;
    constructor(
      public id: number,
      public description: string,
      public name: string,
      public publishDate: Date,
      public publisher: string,
      public upVote: number,
      public downVote: number, ) {
      this.showDescription = false
    }
  }
  
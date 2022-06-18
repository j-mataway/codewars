function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = () => {
     return draft - 20 >= crew * 1.5
    };
   }
   
   
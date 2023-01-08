class Pet {
    constructor(name) {
      this.name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    }
   
    get name;
  }
   
  const myCat = new Pet("пушок");
  console.log(myCat.name)
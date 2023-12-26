class SomeBook {
  constructor(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
  }
  haveYouRead() {
    if (this.readingStatus == true) {
      console.log(`You are alredy read ${this.title} by the author ${this.author}`);
    }
    else {
      console.log(`You still need to read ${this.title} by ${this.author}`);
    }
  }
}
const book1 = new SomeBook('The Robots of dawn','Isaac Asimov',true);
const book2 = new SomeBook('Mockingjay: The Final Book of The Hunger Games','Suzanne Collins',false);
book1.haveYouRead();
book2.haveYouRead();
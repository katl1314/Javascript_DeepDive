// eslint-disable-next-line no-unused-vars
import { PI, makeName, Book } from "./module.js";

console.log("PI", PI);
console.log(makeName("Choi", "MinHyeok"));

const myBook = new Book("삼국지연희", "나관중");
console.log("getTitle ------------ ", myBook.getTitle());
console.log("getAuthor ----------- ", myBook.getAuthor());
console.log("static Book ------- ", Book.instanceof(myBook));

class Manhwa extends Book {
  constructor(title, authror, publish) {
    super(title, authror);
    this.publish = publish;
  }

  getPublish() {
    return this.publish;
  }
}

const manhwa = new Manhwa("A만화", "이땡땡", "oo출판사");
console.log(Book.instanceof(manhwa));
console.log("Title", manhwa.getTitle());
console.log("Author", manhwa.getAuthor());
console.log("Publish", manhwa.getPublish());

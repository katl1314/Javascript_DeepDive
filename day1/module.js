const PI = 3.141592;

const makeName = function (lastName, firstName) {
  return `${lastName} ${firstName}`;
};

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  static instanceof(instance) {
    return instance instanceof this;
  }
}

export { PI, makeName, Book };

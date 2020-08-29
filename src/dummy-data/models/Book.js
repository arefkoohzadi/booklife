class Book {
  constructor(
    id,
    authorId,
    title,
    imageUrl,
    author,
    description,
    pages,
    publisher
  ) {
    this.id = id;
    this.authorId = authorId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.publisher = publisher;
  }
}

export default Book;

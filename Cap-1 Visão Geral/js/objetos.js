function Book(title, author, description) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.classification = 18

    this.printClassification = () => console.log(this.classification)
}

let book = new Book('Hobbit', 'Gandalf', 'Livro muito bom!')

console.log(book.title, book.author, book.description)
book.title = 'Senhor dos aneis 3'
console.log(book.title, book.author, book.description)
book.printClassification()


class ITBook extends Book{
    constructor(title, pages, tech, verify){
        super(title, pages, tech);
        this.verify = verify;
        this.printTech = () =>{
            console.log(this.verify)
        }
    }
}

let jsBook = new ITBook('Js', '450', 'React', 'Verificado');
console.log(jsBook.title);
console.log(jsBook.pages);
jsBook.printTech()
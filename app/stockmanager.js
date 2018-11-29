let stockOfBooks = [ 
    {
        title: "Fantastic Mr Fox",
        author: "Roald Dahl",
        isbn: "435-678",
        copies: 10
    },
    {
        title: "You don't know JS",
        author: "Kyle Simpson",
        isbn: "123-456",
        copies: 3
    },
    {
        title: "James and the Giant Peach",
        author: "Roald Dahl",
        isbn: "784-782",
        copies: 2
    },
    {
        title: "The Witches",
        author: "Roald Dahl",
        isbn: "784-461",
        copies: 8
    },
    {
        title: "The Goblet of Fire",
        author: "J K Rowling",
        isbn: "896-890",
        copies: 4
    }
];


function getStock() {
    console.log(stockOfBooks.length);
    return stockOfBooks;
}

function getBookByIsbn(isbnNumber) {
    console.log ("isbnNumber", isbnNumber);
    const foundBook = stockOfBooks.filter(function(bookTitle) {
        // console.log('each book', bookTitle.isbn)
        if (isbnNumber === bookTitle.isbn) return true  
        else return false;
    })
    console.log (foundBook[0]);
    return foundBook[0];
    // console.log(book);
}

module.exports = {
    getStock,
    getBookByIsbn,
    stockOfBooks,
}
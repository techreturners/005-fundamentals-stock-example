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

module.exports = {
    getStock: getStock,
}
API_Key='wuDGORmXAWnBvUGYjc30Wsqgtz87l1wj'
URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_Key}`

const bookList = document.getElementById("book-list")
getInfo()

function getInfo() {
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            // console.log(data.results.books)
            const books = data.results.books
            books.forEach((book,index) => {
                console.log(book)
                const li = document.createElement('li')
                li.innerHTML = `
                    <span class="number">${index + 1}</span>
                    <div class="book">
                        <p class="book-name">${book.title}</p>
                        <p class="book-author">by ${book.author}</p>
                    </div>
                `
                bookList.appendChild(li)
            })
        })
        .catch(err => {
            console.log(`errror ${err}`)
        })
}

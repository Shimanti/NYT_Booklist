API_Key='wuDGORmXAWnBvUGYjc30Wsqgtz87l1wj'
URL1 = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_Key}`
URL2 = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=${API_Key}`

const bookList = document.getElementById("book-list")
const bookTitle = document.querySelector("h3")

function clickButton() {
  const button = document.querySelector('button')
  if (button.innerHTML === "Non-fiction") {
    bookTitle.innerHTML = `Hardback Non-Fiction ${new Date().toLocaleDateString()}`
    button.innerHTML = "Fiction"
    bookList.innerHTML = ""
    fetch(URL2)
    .then(response => response.json())
    .then(data => getData(data))
  } else {
    bookTitle.innerHTML = `Hardback Fiction ${new Date().toLocaleDateString()}`
    button.innerHTML = "Non-fiction"
    bookList.innerHTML = ""
    fetch(URL1)
      .then(response => response.json())
      .then(data => getData(data))
  }
}

function getData(data) {
    const books = data.results.books
    books.forEach((book,index) => {
        const amazonLink = book.amazon_product_url
        const li = document.createElement('li')
        li.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="book">
                <p class="book-name">${book.title}</p>
                <p class="book-author">by ${book.author}</p>
            </div>
            <a class="book-url" href="${amazonLink}">
                <i class="fas fa-link"></i>
             </a>

        `
        bookList.appendChild(li)
    })
}

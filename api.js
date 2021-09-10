// NYT Pull Request from API
API_Key = 'wuDGORmXAWnBvUGYjc30Wsqgtz87l1wj'
getAPI()

function getAPI(){
  const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_Key}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data.results.books)
      data.results.books.forEach( book => {
          const li = document.createElement('li') //creates list item
          li.textContent = `${book.title} by ${book.author}`//puts title into li
          document.querySelector('ul').appendChild(li) // appends to ul
      })
    })
    .catch(err => {
      console.log(`errror ${err}`)
    })
}

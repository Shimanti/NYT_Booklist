const book_list = document.getElementById("book-list")

const fiction = [
"The Madness of Crowds by Louise Penny",
"Billy Summers by Stephen King",
"The Last Thing He Told Me by Laura Dave",
"The Love Songs of W. E. B. du Bois by Honorée Fanonne Jeffers",
"Lightning Strike by William Kent Krueger",
"The Midnight Library by Matt Haig",
"The Noise by James Patterson; J. D. Barker",
"Complications by Danielle Steel",
"The Paper Palace by Miranda Cowley Heller",
"Bloodless by Douglas Preston; Lincoln Child",
"Malibu Rising by Taylor Jenkins Reid",
"The President's Daughter by James Patterson; Bill Clinton",
"The Invisible Life of Addie Larue by V. E. Schwab",
"We Were Never Here by Andrea Bartz",
"Project Hail Mary by Andy Weir"
]

const listItems = []
listBooks()

function listBooks() {
  fiction.forEach((book,index) => {
      const listItem = document.createElement('li')
      listItem.setAttribute('data-index', index)
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="book">
          <p class="book-name">${book}</p>
        </div>
      `
      listItems.push(listItem)
      book_list.appendChild(listItem)
  })
}
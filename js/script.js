/* eslint-disable guard-for-in */
const container = document.querySelector('.container');
const createBook = document.querySelector('#create_book');
const titleValue = document.querySelector('#book_title');
const authorValue = document.querySelector('#book_author');
const pagesValue = document.querySelector('#page_count');
const newBook = document.querySelector('.new_book');
const popForm = document.querySelector('.popup_form');
const closeBtn = document.querySelector('.close_btn');
const toggleBtn = document.querySelector('#check_box')
const form = document.querySelector('form')

const myLibrary = [];


class Book{
  constructor(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }
}

function addBookToLibrary() {
  myLibrary.push(new Book(titleValue.value, authorValue.value, pagesValue.value, toggleBtn.checked));
}

function displayBook(){
  container.textContent = ''
  // eslint-disable-next-line no-restricted-syntax
  for ( let book = 0; book < myLibrary.length; book +=1){
    const card = document.createElement('div');
    card.classList.add('book_card');
    card.dataset.index = book
    container.appendChild(card);
    const deleteBook = document.createElement('button');
    deleteBook.classList.add('delete_book');
    const bookName = document.createElement('div');
    bookName.classList.add('title');
    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('author');
    const bookPages = document.createElement('div');
    const switchLabel = document.createElement('label')
    switchLabel.classList.add('switch');
    const checkBox = document.createElement('INPUT');
    checkBox.setAttribute('type','checkbox');
    const slider = document.createElement('span');
    slider.classList.add('slider');
    slider.classList.add('round');
    switchLabel.appendChild(checkBox);
    switchLabel.appendChild(slider);
    bookPages.classList.add('page');
    const switchContainer = document.createElement('div');
    switchContainer.classList.add('switch_label')
    const readLabel = document.createElement('div');
    readLabel.textContent = 'Read:'
    switchContainer.append(readLabel);
    switchContainer.append(switchLabel)
    card.appendChild(deleteBook);
    card.appendChild(bookName);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(switchContainer);
    deleteBook.textContent = 'X';
    bookName.textContent = `Name: ${myLibrary[book].title}`;
    bookAuthor.textContent = `Author: ${myLibrary[book].author}`;
    bookPages.textContent = `Pages: ${myLibrary[book].pages}`;
    checkBox.checked = myLibrary[book].read;
    deleteBook.addEventListener('click', (e) => {
      card.classList.add('delete_card');
      deleteCard(e)
    })
    checkBox.addEventListener('click', () => {
      myLibrary[book].read = checkBox.checked
      setTimeout(displayBook, 400);
    })
  }
}



function deleteCard(e) {
  if (e.target.parentElement.className === 'book_card delete_card'){
    const bookIndex = e.target.parentElement.dataset.index;
    myLibrary.splice(bookIndex, 1);
  }
  displayBook();
}


function clearInput() {
  titleValue.value = '';
  authorValue.value = '';
  pagesValue.value = '';
  toggleBtn.checked = false
}


newBook.addEventListener('click', () => {
  popForm.classList.add('active');
})

closeBtn.addEventListener('click', () => {
  popForm.classList.remove('active')
  clearInput()
})

titleValue.addEventListener('input', () => {
  if(titleValue.validity.valueMissing){
    titleValue.setCustomValidity('Please enter a book title')
  }else{
    titleValue.setCustomValidity("")
  }
})

authorValue.addEventListener('input', () => {
  if(authorValue.validity.valueMissing){
    authorValue.setCustomValidity('Please enter a book title')
  }else{
    authorValue.setCustomValidity("")
  }
})

pagesValue.addEventListener('input', () => {
  if(pagesValue.validity.valueMissing){
    pagesValue.setCustomValidity('Please enter a book title')
  }else{
    pagesValue.setCustomValidity("")
  }
})


createBook.addEventListener('click',(e) => {
  
  if(titleValue.validity.valueMissing){
      titleValue.setCustomValidity('Please enter a book title')
    }
  else if(authorValue.validity.valueMissing){
      authorValue.setCustomValidity('Please enter a book title')
    }
  else if(pagesValue.validity.valueMissing){
      pagesValue.setCustomValidity('Please enter a book title')
    }
  else{
    e.preventDefault()
    addBookToLibrary();
    displayBook()
    popForm.classList.remove('active');
    clearInput();}
})












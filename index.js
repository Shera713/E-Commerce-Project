function openMenu() {
document.body.classList += " menu--open"
}

function closeMenu() {
document.body.classList.remove ('menu--open')
}

function renderBooks(){
    const booksWrapper= document.querySelector('.books')
    console.log (booksWrapper);
    ` <div class="book">
<figure class="book__img--wrapper">
  <img class="book__img" src="./assets/deep work.jpeg" alt=""></img>
</figure>
<div class="book__title"> Deep Work

</div>
<div class="book__ratings">
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star-half-alt"></i>
</div>
<di class="book__price">
  <span class="book__price--normal">$25.95</span> $14.95
</di>
  </div>`
}

renderBooks();
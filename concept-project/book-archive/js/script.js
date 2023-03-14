
//------------- handle search button-----------
const searchBook = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;

  // ----------load data----------
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.docs));
};

// ----------display search result data----------
const displaySearchResult = (myBooks) => {
  const searchResult = document.getElementById("search-result");
  searchResult.innerText = "";


  const books = myBooks.docs;
  books.forEach((book) => {
    console.log(book);
    const div = document.innerHTML("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card">
            <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title"> Name: ${book.title}</h5>
              <h6> Author: ${book.author_name}</h6>
              <p>Publisher: <small> ${book.publisher[0]} </small></p>
              <small> First Published Year: ${book.first_publish_year}</small>
            </div>
        </div>
        `;
    searchResult.appendChild(div);
  });
};

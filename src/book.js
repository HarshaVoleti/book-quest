import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function BookSearch() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    searchBooks();
    fetchGenres();
  }, []);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchBooks();
  };

  const searchBooks = () => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: query,
        },
      })
      .then((response) => {
        setBooks(response.data.items);
        setFilteredBooks(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchGenres = () => {
    // Fetch genres from the API or define your own genre list
    const genres = [
      "Fiction",
      "Non-Fiction",
      "Mystery",
      "Thriller",
      "Romance",
      "Fantasy",
      "Science Fiction",
    ];
    setGenres(genres);
  };

  const handleFilter = (genre) => {
    if (genre === "All") {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(
        (book) =>
          book.volumeInfo.categories &&
          book.volumeInfo.categories.includes(genre)
      );
      setFilteredBooks(filtered);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      <div className="filter-buttons">
        <button onClick={() => handleFilter("All")}>All</button>
        {genres.map((genre) => (
          <button key={genre} onClick={() => handleFilter(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Book cover" />
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            <p>Copies: {book.volumeInfo.copies}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookSearch;

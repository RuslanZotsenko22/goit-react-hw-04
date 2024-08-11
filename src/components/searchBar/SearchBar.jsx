import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchQuery.trim()) {
      return toast.error("Please enter search term!");
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.header}>
        <input
          onChange={handleChange}
          value={searchQuery}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          required
          placeholder="Look for what you want 👻"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search 🔍
        </button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </header>
  );
};

export default SearchBar;

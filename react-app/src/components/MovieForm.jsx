import { useState } from "react";

function MovieForm() {
  const [form, setForm] = useState({
    title: "",
    year: "",
    rating: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.title.trim() === "") {
      alert("Title is required");
      return;
    }

    console.log("Submitted movie", form);

    setForm({
      title: "",
      year: "",
      rating: ""
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Movie title"
        aria-label="Movie title"
        value={form.title}
        onChange={handleChange}
      />

      <input
        name="year"
        type="number"
        placeholder="Year"
        aria-label="Year"
        value={form.year}
        onChange={handleChange}
      />

      <input
        name="rating"
        type="text"
        placeholder="Rating"
        aria-label="Rating"
        value={form.rating}
        onChange={handleChange}
      />

      <button type="submit">Submit Movie</button>
    </form>
  );
}

export default MovieForm;
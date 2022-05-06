function FilterMovie(props) {
  const handleMovieSearch = (ev) => {
    ev.preventDefault();
    props.handleFilterMovie(ev.target.value);
  };
  return (
    <>
      <div className="main__form--movie">
        <label className="main__form--movieLabel" htmlFor="movieSearch">
          Movie
          <input
            className="main__form--movieInput"
            type="text"
            name="movieSearch"
            value={props.filterMovie}
            onChange={handleMovieSearch}
            placeholder="Movie title..."
          />
        </label>
      </div>
    </>
  );
}
export default FilterMovie;
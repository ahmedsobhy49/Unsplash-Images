import { useGlobalContext } from "./Context";
export default function SearchForm() {
  const { setQuery, handleSubmit } = useGlobalContext();
  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        className="search-input"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Images"
      />
      <button type="submit" className="btn form-btn">
        Search
      </button>
    </form>
  );
}

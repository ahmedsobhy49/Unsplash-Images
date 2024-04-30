import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(1);

  async function fetchData() {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?client_id=VO1GwR_iKWa8wsPeSaPcds4GXdnj6XN3jO92FQW1AcE&query=${query}`
      );
      const data = await res.json();
      const images = data.results;
      const total = data.total;
      setData(images);
      setTotal(total);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query) {
      fetchData();
    }
  }

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        query,
        setQuery,
        data,
        setData,
        fetchData,
        handleSubmit,
        isLoading,
        total,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => useContext(AppContext);

import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import { useGlobalContext } from "./Context";
import Header from "./Header";
import { useEffect } from "react";
const App = () => {
  const { isDarkTheme, isLoading } = useGlobalContext();

  useEffect(() => {
    if (isDarkTheme) document.body.style.backgroundColor = "#141233";
    else document.body.style.backgroundColor = "#fff";
  });

  return (
    <main>
      <ThemeToggle />
      <div className="container">
        <Header />
        <SearchForm />
        {!isLoading ? <Gallery /> : <div className="loading"></div>}
      </div>
    </main>
  );
};
export default App;

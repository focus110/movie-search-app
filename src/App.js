import "./App.css";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Search />
      <Movies />
    </div>
  );
}

export default App;

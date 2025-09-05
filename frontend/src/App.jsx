import "./css/App.css";
import MovieCard from "./components/MovieCard";
import NavBar from "./components/NavBar";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const movieNumber = 1;
  return (
    <div className="App">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
        {/* <h1>Movie Application</h1>
      <Test props="hello" />
      <Test props="hello world" /> */}
        {/* {movieNumber === 1 ? (
        <MovieCard
          movie={{ url: "hello", title: "hello", releaseDate: "2004" }}
        />
      ) : (
        <MovieCard
          movie={{ url: "default.jpg", title: "Unknown", releaseDate: "N/A" }}
        />
      )} */}

        {/* {movieNumber === 1 && (
        <MovieCard
          movie={{ url: "hello", title: "hello", releaseDate: "2004" }}
        />
      )} */}

        {/* <MovieCard
        movie={{ url: "hello", title: "hello", releaseDate: "2004" }}
      />
      <MovieCard
        movie={{ url: "default.jpg", title: "Unknown", releaseDate: "N/A" }}
      /> */}
      </main>
    </div>
  );
}

// function Test({ props }) {
//   return (
//     <>
//       <h4>{props}</h4>
//     </>
//   );
// }

export default App;

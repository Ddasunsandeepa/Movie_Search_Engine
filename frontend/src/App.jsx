import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  // const movieNumber = 1;
  return (
    <div>
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

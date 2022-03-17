import { Fragment, useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import FavoritesPage from "./pages/FavoritesPage";
import MainPage from "./pages/MainPage";
import Hero from "./components/Hero/Hero";
import TitlePage from "./pages/TitlePage";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "fe62fa52c7523251a631f478b7314ce8";

const movieEndpoints = {
  popular: `${URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  nowPlaying: `${URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  topRated: `${URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  upcoming: `${URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
};

const reducer = (state, action) => {
  if (action.type === 'MOVIE_POP') {
    return {...state, popular: action.popular};
  }
  if (action.type === 'MOVIE_NOWPLAYING') {
    return {...state, nowPlaying: action.nowPlaying};
  }
  if (action.type === 'MOVIE_TOPRATED') {
    return {...state, topRated: action.topRated};
  }
  if (action.type === 'MOVIE_UPCOMING') {
    return {...state, upcoming: action.upcoming};
  }
  if (action.type === 'MOVIE_TRENDING') {
    return {...state, trending: action.trending};
  }
  return {
    popular: [],
    nowPlaying: [],
    topRated: [],
    upcoming: [],
    trending: []
  }

}

function App() {
  const [movieState, dispatch] = useReducer(reducer, {
    popular: [],
    nowPlaying: [],
    topRated: [],
    upcoming: [],
    trending: []
  });
  // const [moviePopular, setMoviePopular] = useState([]);
  // const [movieNowPlaying, setMovieNowPlaying] = useState([]);
  // const [movieTopRated, setMovieTopRated] = useState([]);
  // const [movieUpcoming, setMovieUpcoming] = useState([]);
  // const [movieTrending, setMovieTrending] = useState([]);

  //Movies
  useEffect(() => {
    axios
      .get(movieEndpoints.popular)
      .then((response) => {
        // setMoviePopular(response.data.results);
        dispatch({type: 'MOVIE_POP', popular: response.data.results});
      })
      .catch((err) => console.log(err));

    axios
      .get(movieEndpoints.nowPlaying)
      .then((response) => {
        // setMovieNowPlaying(response.data.results);
        dispatch({type: 'MOVIE_NOWPLAYING', nowPlaying: response.data.results});
      })
      .catch((err) => console.log(err));

    axios
      .get(movieEndpoints.topRated)
      .then((response) => {
        // setMovieTopRated(response.data.results);
        dispatch({type: 'MOVIE_TOPRATED', topRated: response.data.results});
      })
      .catch((err) => console.log(err));

    axios
      .get(movieEndpoints.upcoming)
      .then((response) => {
        // setMovieUpcoming(response.data.results);
        dispatch({type: 'MOVIE_UPCOMING', upcoming: response.data.results});
      })
      .catch((err) => console.log(err));

    axios
      .get(movieEndpoints.trending)
      .then((response) => {
        // setMovieTrending(response.data.results);
        dispatch({type: 'MOVIE_TRENDING', trending: response.data.results});
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Hero
                listShow={[
                  ...movieState.popular,
                  ...movieState.nowPlaying,
                  ...movieState.topRated,
                  ...movieState.upcoming,
                  ...movieState.trending,
                ]}
              />
              <MainPage
                popular={movieState.popular}
                nowPlaying={movieState.nowPlaying}
                topRated={movieState.topRated}
                upcoming={movieState.upcoming}
                trending={movieState.trending}
              />
            </Fragment>
          }
        />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/favorites/:title" element={<TitlePage />} />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;

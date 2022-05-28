// Libraries
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Components
import Login from './Components/Login';
import Listado from './Components/Listado';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Detalle from './Components/Detalle';
import Resultados from './Components/Resultados';
import Favoritos from './Components/Favoritos';

// Styles
import "./css/bootstrap.min.css";
import "./css/app.css"

function App() {

  const [favorites, setFavorites] = useState([]);

    useEffect( () => {
        const favsInLocal = localStorage.getItem("favs")
        // console.log(favsInLocal)

        if(favsInLocal !== null) {
          const favsArray = JSON.parse(favsInLocal);
          console.log(favsArray);
          setFavorites(favsArray);
        }
    }, [])

  const addOrRemoveFromFavs = e => {
    const favMovies = localStorage.getItem("favs");

    let tempMoviesInFavs;

    if( favMovies === null ){
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;
    const movieData = {
      imgURL, title, overview,
      id: btn.dataset.movieId
    }
    
    let movieIsInArray = tempMoviesInFavs.find( oneMovie => oneMovie.id === movieData.id)

    if( !movieIsInArray ){
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs))
      console.log("Se agregó la película -> " + movieData.title)
      setFavorites(tempMoviesInFavs)
      // console.log("LocalStorage: " + localStorage.getItem("favs"))
    } else {
      let moviesLeft = tempMoviesInFavs.filter( oneMovie => oneMovie.id !== movieData.id )
      localStorage.setItem("favs", JSON.stringify(moviesLeft))
      console.log("Pelicula eliminada -> " + movieData.title)
      // console.log("LocalStorage: " + localStorage.getItem("favs"))
      setFavorites(moviesLeft);
    }
  }


  let props;

  return (
    <div>
      <Header favorites={favorites}/>
      <Routes>
        <Route path = "/" element={<Login />}/>
        {/* Revisar reactv6 route render props (spread operator) */}
        <Route path = '/detalle' element={<Detalle />}/>
        <Route path = '/resultados' element={<Resultados />}/>
        <Route path = '/listado' element={ <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} {...props} /> } />
        <Route path = '/favoritos' element={<Favoritos favorites={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs} {...props} /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

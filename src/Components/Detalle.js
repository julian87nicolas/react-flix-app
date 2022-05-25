// Acceso a detalles de cada pelicula: https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

function Detalle() {
    
    let token = sessionStorage.getItem("token");

    let query = new URLSearchParams(window.location.search);

    let movieID = query.get("movieID");
    
    const [movie, setMovie] = useState(null);

    useEffect( () => {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=d54ba942bbfca995f8d8a6b6fb0d83b9&language=es-ES`;
        // console.log(endPoint);
        axios.get(endPoint).then(response => {
            const movieData = response.data;
            setMovie(movieData)
        })        
        .catch(error => {
            console.log(error);
        })
    }, [movieID]);



    return (
        <>
            { !token && <Navigate to="/" />}
            { !movie && <p>Cargando película...</p>}
            { movie && 
                <>
                    <h2>Titulo: {movie.title}</h2>
                    <div className="row">
                        <div className="col-4">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className = "img-fluid" alt="movie poster" />
                        </div>
                        <div className="col-8">
                            <h5>Fecha de estreno: {movie.release_date}</h5>
                            <h5>Reseña:</h5>
                            <p>{ movie.overview }</p>
                            <h5>Géneros:</h5>
                            <ul>
                                { movie.genres.map(oneGenre => <li key={oneGenre.id}>{oneGenre.name}</li>)}
                            </ul>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Detalle;
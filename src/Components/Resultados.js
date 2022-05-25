import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import swAlert from "@sweetalert/with-react";
import { Navigate } from "react-router-dom";

// https://api.themoviedb.org/3/search/movie?api_key=d54ba942bbfca995f8d8a6b6fb0d83b9&language=es-ES&page=1&include_adult=false


function Resultados () {
    let token = sessionStorage.getItem("token");

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get("keyword")
    
    const navigate = useNavigate();

    const [moviesResults, setMoviesResults] = useState([]);
    
    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=d54ba942bbfca995f8d8a6b6fb0d83b9&language=es-ES&query=${keyword}`;
        
        axios.get(endPoint).then(response => {

            const moviesArray = response.data.results;
            
            if(moviesArray.length === 0){
                swAlert(<h4>Tu búsqueda no arrojó resultados.</h4>)
            }
            
            setMoviesResults(moviesArray);              
        })
            .catch(error => console.log(error))
    }, [keyword]);

    return (
        <>
        { !token && <Navigate to="/" /> }
        <h2>Buscaste: <em>{keyword}</em></h2>
        {moviesResults.length === 0 && <h3>No hay resultados</h3>}
        <div className="row container-fluid">
        {/* Estructura base */}        
        {
            moviesResults.map((oneMovie, idx) => {
                return (
                        <div className="col-4" key={idx}>
                            <div className="card m-0.5">
                                <img src= { "https://image.tmdb.org/t/p/w500/" + oneMovie.poster_path} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{ oneMovie.title }</h5>
                                    <p className="card-text"> { oneMovie.overview.substring(0, 200) + " ..." } </p>
                                    <Link to= { "/detalle?movieID=" + oneMovie.id} className="btn btn-primary">Ver detalle</Link>
                                </div>  
                            </div>
                        </div>
                        )
                    }   
                )
            }
        </div>
        </>
        )
}

export default Resultados;
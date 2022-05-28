import { useEffect, useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';


function Listado(props){
    let token = sessionStorage.getItem("token");
    const [moviesList, setMoviesList] = useState([]); 

    useEffect( () =>{
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=d54ba942bbfca995f8d8a6b6fb0d83b9&language=es-ES&page=1'
        axios.get(endPoint)
         .then(response => {
             const apiDate = response.data;
             setMoviesList(apiDate.results)
        })
        .catch( error => {
            swAlert(<h3>Ha ocurrido un error, intenta más tarde</h3>)
        })
    }, [setMoviesList]);


    return (
        <>
        { !token && <Navigate to="/" /> }
        
        <div className="container-fluid row">
        {/* Estructura base */}        
        {
            moviesList.map((oneMovie, idx) => {
                return (
                        <div className="col-3" key={idx}>
                            <div className="card m-0.5 mt-1">
                                <img src= { "https://image.tmdb.org/t/p/w500/" + oneMovie.poster_path} className="card-img-top" alt="..." />
                                <button className='favorite-btn'
                                    onClick={props.addOrRemoveFromFavs}
                                    data-movie-id = {oneMovie.id}>
                                        <i class="fa-solid fa-heart"></i>
                                </button>
                                <div className="card-body">
                                    <h5 className="card-title">{ oneMovie.title }</h5>
                                    <p className="card-text"> { oneMovie.overview.substring(0, 50) + " ..." } </p>
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

export default Listado;
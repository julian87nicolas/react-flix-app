import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Favoritos (props) {

    const token = sessionStorage.getItem("token")

    return (
        <>

        { !token && <Navigate to="/" /> }
        <div className="container-fluid row">
        <h2>Favoritos: </h2>
        { !props.favorites.length && <div className="col-12 text-danger">No tienes favoritos</div>}        
        {   
            props.favorites.map((oneMovie, idx) => {
                return (
                        <div className="col-3" key={idx}>
                            <div className="card m-0.5 mt-1">
                                <img src= { oneMovie.imgURL } className="card-img-top" alt="..."/>
                                <h5 className="card-title">{ oneMovie.title }</h5>
                                    
                                    <button className='favorite-btn'
                                    onClick={props.addOrRemoveFromFavs}
                                    data-movie-id = {oneMovie.id}>
                                        <i class="fa-solid fa-heart"></i>
                                    </button>
                                <div className="card-body">
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

export default Favoritos

// Agregar fav en search y usar token en fav
import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom"


function Buscador () {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();

        if(keyword.length === 0 ){
            swAlert(<h5>Debes escribir una palabra clave.</h5>)
        } else if (keyword.length < 4){
            swAlert(<h5>Debes escribir al menos cuatro caracteres.</h5>)            
        } else {
            navigate(`/resultados?keyword=${keyword}`, { replace: true })
        }
        e.currentTarget.keyword.value = "";
    }

    return (
        <form className="d-flex" role="search" onSubmit={submitHandler}>
                <input className="form-control me-1" type="search" name="keyword" placeholder="Escribe una palabra clave..."/>
                <button className = "btn btn-outline-secondary" type="submit">Buscar</button>
        </form>
    )
}

export default Buscador;
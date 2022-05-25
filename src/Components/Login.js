import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function Login(){

    const navigate = useNavigate();
    
    const submitHandler = (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // console.log(regexEmail.test(email));

        if(email === "" || password === ""){
            
            swAlert(
                <div>
                    <h2>Todos los campos son obligatorios.</h2>
                    <p>Por favor, rellene los campos de correo electronico y/o contraseña</p>
                </div>
                );
            return;
        }

        if(email !== "" && !regexEmail.test(email)){
            swAlert("Debes escribir un mail válido.")
            return;
        }

        if(email !== "challenge@alkemy.org" || password !== "react") {
            swAlert("Credenciales inválidas.")
            return;
        }

        axios
            .post("http://challenge-react.alkemy.org", { email, password } )
            .then( res => {
                swAlert(<h2>Perfecto, ingresaste correctamente.</h2>)
                console.log(res.data);
                const tokenRecibido = res.data.token;
                sessionStorage.setItem("token", tokenRecibido);
                navigate("/listado");
            })
    }

    let token = sessionStorage.getItem("token");

    return (
        <>
        { token && <Navigate to="/listado" />}
        
        <div className="row g-3">
            <form onSubmit={submitHandler} className="d-flex flex-column justify-content-center align-items-center">
                <h2>Formulario de Login</h2>
                <label className="col-3">
                    <span>Correo electronico: </span>
                    <br />
                    <input type="text" className="form-control" name="email"/>
                </label>
                <label className="col-3">
                    <span>Contraseña:</span>
                    <input type="password" className="form-control" name="password"/>
                </label>
                <button className = "btn btn-success col-3" type="submit">Ingresar</button>
            </form>
        </div>
       </>
    )
}

export default Login;
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Nav from '../../components/Nav/Nav'

function UserPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const nombreUsuario = location.state?.nombre || "Usuario";
  
  const manejarCerrarSesion =() => {
    navigate("/");
  }

  
    

  return (
    <div>
        <Nav />
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-2xl">Bienvenido: {nombreUsuario} </h1>
            <p>Esta es tu cuenta</p>
            <button 
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={manejarCerrarSesion}>Cerrar Sesion</button>
        </div>
    </div>
  )
}

export default UserPage
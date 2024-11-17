import React from 'react'
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-gray-200 p-4">
        <ul className="flex justify-center space-x-6">
            <li>
                <Link to="/" className="text-gray-700 hover:text-blue-500">Inicio</Link>
            </li>
            <li>
                <Link to="/sing-in" className="text-gray-700 hover:text-blue-500">Iniciar Sesion</Link>
            </li>
            <li>
                <Link to="/contador" className="text-gray-700 hover:text-blue-500">Contador</Link>
            </li>
            <li>
                <Link to="/acerca-de-nosotros" className="text-gray-700 hover:text-blue-500">Acerca de</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
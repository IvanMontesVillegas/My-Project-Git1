import React,{ useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';

function Login() {
  
  const [usuarios, setUsuarios] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  const navigate = useNavigate();

  useEffect(() =>{
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.log("Error al cargar los datos:",error));
  },[]);

  const manejarInicioSesion = (e) => {
    e.preventDefault();
    const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.correo === email && usuario.password === password
        
    );

    if (usuarioEncontrado){
        console.log(`Bienvenido,${usuarioEncontrado.nombre}`);
        navigate("/user", { state: { nombre: usuarioEncontrado.nombre } });
    } else{
        console.log("Correo o contraseña incorrectos");
    }
  }


  return (
    <div>
        <Nav />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Iniciar Sesion</h2>
            <form onSubmit={manejarInicioSesion}>
            <div className="mb-4">
                <label 
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
                    >Correo Electronico</label>
                <input 
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo@ejemplo.com"
                className="w-full px-4 py-2 border rounded-lg"
                required />
            </div>
            <div className="mb-4">
                <label 
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**********"
                className="w-full px-4 py-2 border rounded-lg"
                />
            </div>
            <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full">Iniciar Sesion</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login

import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cerrarSesion } from './services/alumnos.services';

// Componentes
import RouterPrivate from './components/RouterPrivate/RouterPrivate';
import Footer from './components/Footer/Footer';
import ProyectosLista from './components/Proyectos/ProyectosLista';

// Vistas
import IniciarSesion from './pages/IniciarSesion';
import Registrarse from './pages/Registrarse';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import ProyectosDetalle from './pages/ProyectosDetalle';
import Dashboard from './pages/Admin/Dashboard';
import EliminarProyecto from './pages/Admin/EliminarProjecto';
import NuevoProyecto from './pages/Admin/NuevoProyecto';
import EditarProyecto from './pages/Admin/EditarProyecto';
import Error404 from './pages/Error404';

function App() {
  const navigate = useNavigate();
  const [estaAutenticado, setEstaAutenticado] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setEstaAutenticado(true);
    } else {
      setEstaAutenticado(false);
    }
  }, [])

  function onIniciarSesion(token, alumno) {
    if (token) {
      localStorage.setItem('token', token)
      setEstaAutenticado(true);
      navigate('/');
    } else {
      localStorage.removeItem('token')
      setEstaAutenticado(false)
    }
  }

  function onCerrarSesion() {
    localStorage.removeItem('token');
    setEstaAutenticado(false);
    navigate('/iniciarSesion'); 
    cerrarSesion();
  }

  if (estaAutenticado === null) {
    return <div>Cargando...</div>
  }

  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="logo">
            <h1><Link className=" mx-5" to="/">L<span>C</span></Link></h1>
          </div>
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#barra_nav"
            aria-controls="barra_nav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-lg-flex justify-content-center" id="barra_nav">
            <ul className="navbar-nav fs-5" id="menu">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/projects">Portfolio</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>

              {estaAutenticado && 
                <li className='nav-item'> 
                  <a className='nav-link' onClick={onCerrarSesion}> Cerrar sesión </a> 
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/iniciarSesion" element={<IniciarSesion onIniciarSesion={onIniciarSesion} />} />
        <Route path="/registrarse" element={<Registrarse/>}/>
        <Route path="/" element={<RouterPrivate estaAutenticado={estaAutenticado}> <Inicio /> </RouterPrivate>} />
        <Route path="/projects" element={<RouterPrivate estaAutenticado={estaAutenticado}> <ProyectosLista /> </RouterPrivate>} />
        <Route path="/admin/projects" element={<RouterPrivate estaAutenticado={estaAutenticado}> <Dashboard /> </RouterPrivate>} />
        <Route path="/admin/projects/nuevo" element={<RouterPrivate estaAutenticado={estaAutenticado}> <NuevoProyecto /> </RouterPrivate>} />
        <Route path="/admin/projects/:id/eliminar" element={<RouterPrivate estaAutenticado={estaAutenticado}> <EliminarProyecto /> </RouterPrivate>} />
        <Route path="/admin/projects/:id/editar" element={<RouterPrivate estaAutenticado={estaAutenticado}> <EditarProyecto/> </RouterPrivate>}/>
        <Route path="/projects/:id" element={<RouterPrivate estaAutenticado={estaAutenticado}> <ProyectosDetalle /> </RouterPrivate>} />
        <Route path="/contacto" element={<RouterPrivate estaAutenticado={estaAutenticado}> <Contacto /> </RouterPrivate>}></Route>
        <Route path="*" element={<RouterPrivate estaAutenticado={estaAutenticado}> <Error404/> </RouterPrivate>}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App


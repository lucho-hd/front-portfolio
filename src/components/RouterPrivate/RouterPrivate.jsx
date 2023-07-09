
// React
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 

function RouterPrivate({estaAutenticado, children}) {
    const navigate = useNavigate();  

    useEffect(() => {
        if(!estaAutenticado) {  
            navigate('/iniciarSesion');
        }
    }, [estaAutenticado])

    return estaAutenticado ? children : null
}

export default RouterPrivate
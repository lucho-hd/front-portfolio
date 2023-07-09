
async function crearCuenta(name, surname, email, password) {
    return fetch('http://localhost:2022/api/alumnos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, surname, email, password})
    })
    .then( async (response) => {
        if(response.ok) {
            return response.json()
        }else{
            throw await response.json()
        }
    })
}

async function iniciarSesion(email, password) {
    return fetch('http://localhost:2022/api/alumnos/iniciarSesion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then( async (response) => {
        if (response.ok) {
            return response.json()
        }else{
            throw await response.json()
        }
    }) 
}

async function cerrarSesion() {
    return fetch('http://localhost:2022/api/alumnos/cerrarSesion', {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json',
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => {
        if(response.ok) {
            return response.json()
        }else{
            throw response.json()
        }
    })
}

export {
     iniciarSesion,
     crearCuenta,
     cerrarSesion
} 
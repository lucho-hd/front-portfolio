
async function traer() {
    return fetch('http://localhost:2022/api/projects', {
        method: 'GET',
        headers: {
            'Content-Type': 'aplication/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Ocurrió un error inesperado traer el proyecto')
            }
        })
}

async function traerPorId(id) {
    return fetch(`http://localhost:2022/api/projects/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'aplication/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Ocurrió un error inesperado al traer el proyecto')
            }
        })
}

async function traerTestimonios(id) {
    return fetch(`http://localhost:2022/api/projects/${id}/testimonios`, {
        method: 'GET',
        headers: {
            'Content-Type': 'aplication/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Ocurrió un error inesperado al traer los testimonios')
            }
        })
}

async function traerGaleria(id) {
    return fetch(`http://localhost:2022/api/projects/${id}/galery`, {
        method: 'GET',
        headers: {
            'Content-Type': 'aplication/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Ocurrió un error inesperado al traer la galeria')
            }
        })
}

async function crear(name, description, tecnology, link, img, condition) {
    return fetch('http://localhost:2022/api/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({name, description, tecnology, link, img, condition})
    })
        .then(async (response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw await response.json()
            }
        })
}

async function editar(id, name, description, tecnology, link, img, condition) {
    return fetch(`http://localhost:2022/api/projects/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'aplication/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({name, description, tecnology, link, img, condition})
    })
        .then( async (response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw await response.json()
            }
        })
}

async function eliminar(id) {
    return fetch(`http://localhost:2022/api/projects/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'aplication/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify()
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Ocurrió un error inesperado al intentar eliminar el proyecto')
            }
        })
}


export {
    traer,
    traerPorId,
    traerTestimonios,
    traerGaleria,
    crear,
    editar,
    eliminar
}
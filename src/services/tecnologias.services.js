async function traer() {
    return fetch('http://localhost:2022/api/tecnologias')
        .then(response => response.json())
}

export {
    traer
}
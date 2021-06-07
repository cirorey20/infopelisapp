import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/search/movie?'
const baseUrlId = 'https://api.themoviedb.org/3/movie/'

const key = 'api_key=c5240aee19c31b6d2de407dbb303a113';
const keyIMG = '?api_key=c5240aee19c31b6d2de407dbb303a113';

const lenguaje = '&language=es-ES'

const query = '&query='

//BUSCADOR DE PELICULAS

export async function getPelis (title) {
    try {
        const res = await axios({
            url: baseURL+key+query+title+lenguaje,
            method: 'GET'
        })
        return res.data
    } catch (e) {
        console.log(e)
    }
}

//PELICULA UNICA POR ID
export async function pelicula (id) {
    try {
        const res = await axios({
            url: baseUrlId+id+keyIMG+lenguaje,
            method: 'GET'
        })
        return res.data
    } catch (e) {
        console.log(e)
    }
}
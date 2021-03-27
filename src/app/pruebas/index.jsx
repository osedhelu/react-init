import socketIOClient from "socket.io-client";
import _heroesDB, { _dbCajas } from "./json"

export const validarString = (value) => {
    return `hola ${value}!`
}

export const getUser = () => ({
    uid: 'ab1234',
    name: 'osedhelu'
})
export const getUsuariosActivos = (name) => ({
    uid: 'ab1234',
    name
})

export const getArray = () => ['nameABX', 1234]


export const getHeroesById = (id) => _heroesDB.find(resp => resp.id === id); 

export const getHeroesByOwner = (owner) => _heroesDB.filter(resp => resp.owner === owner)


export const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroesById(id)
            if(p1){
                resolve(p1)
            }else {
                reject('No se pudo encontrar un heroe')
            } 
        }, 4)
    })
}

export const getCategorias = async(type) => {
   try {
        const resp = await fetch(`http://190.85.54.78:3000/e/${type}`);
        const {data} = await resp.json();
        return data
   } catch (err) {
       return false;
   }
}
export const resteSinrestart = (a,b) => {
    let resul = 0
    for(resul; b < a;b++){
        resul++
    }
    return resul;
} 
export const conexionSocket = async() => {
    // const ENDPOINT = "http://192.168.10.11:9851";
    // const socket = socketIOClient(ENDPOINT, {
    //     extraHeaders: {
    //         'x-Token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7InJvbGUiOiJFTVBSRVNBIiwiZXN0YWRvIjp0cnVlLCJwcmltZXJhX3ZleiI6ZmFsc2UsIl9pZCI6IjYwNWIzNmFjYjVlNzE1YWM2NDAzMzc4OSIsIm5vbWJyZSI6Ik9zY2FyIiwiYXBlbGxpZG9zIjoiSGVycmVyYSAiLCJlbWFpbCI6Im9zZWRoZWx1QGdtYWlsLmNvbSIsImNlbHVsYXIiOiIyMzggMTg0OTg0OSIsInBhc3N3b3JkIjoiIiwicGF0cm9jaW5hZG9yIjoiYWRtaW4iLCJfX3YiOjB9LCJpYXQiOjE2MTY4NTc0OTIsImV4cCI6MTYxNjg2NzU3Mn0.ipiQQ02az_yXQ4No0F0TTueXC-3RsSkNcXinwIxNroI"
    //     }});
    // socket.on('getCajas', (resp) => {
    //     return resp
    // })
}


export const FnDerameGeneracional = async() => {
    return _dbCajas.filter(resp => resp.usuario === 'Batman')
}
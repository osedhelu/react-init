import _heroesDB from "./json"

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
        }, 400)
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
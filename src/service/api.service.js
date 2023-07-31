
const fetcher = (...args) => fetch(...args).then(res => res.json());

const getPokemonById = async (id) =>{
    const resp = await fetcher(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return resp;
};

export { fetcher, getPokemonById };
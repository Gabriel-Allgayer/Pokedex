 const pokename = document.querySelector('.pokename')
 const pokenumber = document.querySelector('.pokenumber')
 const pokeimg = document.querySelector('.pokemonimg')
 const form = document.querySelector('.form')
 const inputsearch = document.querySelector('#input_search')
 const buttonPrev = document.querySelector ('.btn-prev')
 const buttonNext = document.querySelector ('.btn-next')

let searchpokemon = 1

const fetchPokemon = async(pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
    if (APIResponse.status == 200) {
        const data = await APIResponse.json()

        return data
    }
    }


const renderPokemon = async(pokemon) => {

    pokename.innerHTML = 'Loading...'

    const data = await fetchPokemon(pokemon)

    if (data) { 
    pokename.innerHTML = data.name
    pokenumber.innerHTML = data.id
    pokeimg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    
    searchpokemon = data.id
    inputsearch.value = ""
    } else {
        pokename.innerHTML = 'Not found =('
        pokenumber.innerHTML = ''
        pokeimg.src = './image/pokebola.png'
    }
}

form.addEventListener('submit', (event) => {

    event.preventDefault()
    renderPokemon(inputsearch.value.toLowerCase())
    
})

buttonPrev.addEventListener('click', () =>{
    if (searchpokemon >1) {
    searchpokemon -= 1
    renderPokemon(searchpokemon) }
})

buttonNext.addEventListener('click', () =>{
    searchpokemon += 1
    renderPokemon(searchpokemon)
})

renderPokemon(searchpokemon)


//variables


const button = document.querySelector('#submitButton')
const input = document.querySelector('#textInput')
const nameContainer = document.querySelector('#champName')
const tempContainer = document.querySelector('#champTitle')
const imageContainer = document.querySelector('#champImage')





// functions

button.addEventListener('click', async () => {
    
    let response = await axios.get(
        `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/en_US/champion.json`
    )
    console.log(response)
})


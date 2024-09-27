//variables
apiKey = (`RGAPI-fee3b467-805d-466b-b56f-8d627ab37e87`)

const button = document.querySelector('#submitButton')
const input = document.querySelector('#textInput')
const nameContainer = document.querySelector('#champName')
const titleContainer = document.querySelector('#champTitle')
const imageContainer = document.querySelector('#champImage')





// functions

button.addEventListener('click', async () => {
    let name = input.value
    let response = await axios.get(
        `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/en_US/champion.json?key=${apiKey}${name}`
    )
    console.log(response)

    let champName = response.data.data[name].id
    nameContainer.textContent = (champName)
})


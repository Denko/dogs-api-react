
const getDog = async (breedId) => {

    let url = ''

    if (breedId === 0 || breedId === undefined) {
        url = 'https://api.thedogapi.com/v1/images/search'
    } else {
        url = `https://api.TheDogAPI.com/v1/images/search?breed_ids=${breedId}`
    }


    const apiKey = 'live_pKwpMGGey2cHt4yGrqatTffDSPQbLDetUNBGBfQxvtvIzReRaMFFWqsFanw0yUMp'
    const fetchOptions = {
        method: 'GET',
        headers: {
            'x-api-key': apiKey
        }
    }

    const response = await fetch(url, fetchOptions)
    if (!response.ok) {
        const { url, status, statusText } = response
        throw Error(`Error: ${status} ${statusText} in fetch ${url}`)
    }
    const [data] = await response.json()

    // console.log(breedId)
    // console.log(data)

    let { url: image, breeds: [breed] } = data

    if (!breed) {
        breed = {
            id: 0,
            name: ''
        }
    }

    const dog = {
        image,
        breed
    }

    return dog

}

export default getDog
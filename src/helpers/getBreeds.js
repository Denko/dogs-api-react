
const getBreeds = async () => {

    const url = 'https://api.thedogapi.com/v1/breeds'
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
    const breeds = await response.json()

    return breeds

}

export default getBreeds
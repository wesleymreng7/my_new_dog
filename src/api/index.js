const baseUrl = 'https://dog.ceo/api/'


export const getBreedList = async () => {
    try {
        const response = await fetch(`${baseUrl}breeds/list/all`, {
            method: "GET",
            headers: {
                'Accept': 'application/json'  
            },
        })
        const breedResponse = await response.json()
        return Object.keys(breedResponse.message)
    } catch (e) {
        console.log(e.message)
        //throw new Error(e.message)
    }
}


export const getBreed = async (breed) => {
    try {
        const response = await fetch(`${baseUrl}breed/${breed}/images`, {
            method: "GET",
            headers: {
                'Accept': 'application/json'  
            },
        })
        const breedResponse = await response.json()
        return breedResponse.message
    } catch (e) {
        console.log(e.message)
        //throw new Error(e.message)
    }
}
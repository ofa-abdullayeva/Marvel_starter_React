class MarvelServices {

    getResource = async (url) =>{

        let res = await fetch(url);

        if ( !res.ok ) {
            throw new Error(`Could not fetch ${url},status: ${res.status}`)
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=252d9e5c32ded0b46714a37c6fc9d68d&hash=bf0a424c5fd822195b1a89adecab7b9b')
    }

    getCharacter = (id) => {
        return this.getResource(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=252d9e5c32ded0b46714a37c6fc9d68d&hash=bf0a424c5fd822195b1a89adecab7b9b`);
    }
}

export default MarvelServices
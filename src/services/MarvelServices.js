

class MarvelServices {
    _apiBase = 'http://gateway.marvel.com/v1/public/';
    _apiKey = 'ts=1&apikey=98959f60d7f5ef6df2ca3b7134f2480d&hash=ca2eb543f5b2393894d5651aad8a2a00'
    getResource = async (url) => {
  
      let res = await fetch(url);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
      }
  
      return await res.json();
    }
  
    getAllCharacters = async () => {
      const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=205&${this._apiKey}`);
      return (res.data.results.map(item => this._transformCharacter(item)))
    }
  
    getCharacter = async (id) => {
      const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
      return this._transformCharacter(res.data.results[0])
    }
  
    _transformCharacter = (character) => {
      return {
        id: character.id,
        name: character.name,
        description: character.description,
        thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
        homepage: character.urls[0].url,
        wiki: character.urls[1].url,
        comics: character.comics.items
      }
    }
  }
  
  export default MarvelServices;
  
  

// d296322b2836e49e16a304afca30b0ac

//http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
class MarvelServices {
    _apiBase = 'http://gateway.marvel.com/v1/public/';
    _apiKey = 'ts=1&apikey=0d246aafc44df77098e7f7f3ff6020c4&hash=d296322b2836e49e16a304afca30b0ac'
    _baseOffset = 200
    getResource = async (url) => {
  
      let res = await fetch(url);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
      }
  
      return await res.json();
    }
  
    getAllCharacters = async (offset=this._baseOffset) => {
      const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
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
  
  
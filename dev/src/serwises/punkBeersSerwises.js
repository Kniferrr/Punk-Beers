export default class punkBeersSerwises {
    _apiBase = 'https://api.punkapi.com/v2';
    
  
    async getAllBeers(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    }
}
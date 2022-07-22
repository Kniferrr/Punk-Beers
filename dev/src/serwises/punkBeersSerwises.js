export default class punkBeersSerwises {
    _apiBase = 'https://api.punkapi.com/v2';
    perPage = "&per_page=24";
  
    async getAllBeers(url) {
      const res = await fetch(`${this._apiBase}${url}${this.perPage}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    }
}
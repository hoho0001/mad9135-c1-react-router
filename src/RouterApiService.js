class RouterApiService {

  constructor () {
    this.baseUrl = 'https://jsonplaceholder.typicode.com'
    this.options = {
      headers: {
        'Accept': 'application/json; charset=utf-8'
      }
    }
  }
  
  async fetchJson(uri, options = {}) {
    try {
      const response = await fetch(`${this.baseUrl}${uri}`, { ...this.options, ...options }) //merge two objects
      if (response.ok) {
        return await response.json()
      }
      return Promise.reject(`${response.status}: ${response.statusText}`)
    } catch (err) { 
      return Promise.reject('The fetch request failed ' + err)
    }
  }

  getUsers () {
    return this.fetchJson(`/users`)
  }

  getAlbums (user = null) {
    if (user) {
      return this.fetchJson(`/albums?userId=${user}`)
    } else {
      return this.fetchJson(`/albums`)
    }
  }
  getPosts (user = null) {
    if (user) {
      return this.fetchJson(`/posts?userId=${user}`)
    } else {
      return this.fetchJson(`/posts`)
    }
  }
  sleeper(ms) {
    return function(x) {
      return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
  }
}

export default RouterApiService
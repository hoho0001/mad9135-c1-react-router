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
      const response = await fetch(`${this.baseUrl}${uri}`, { ...this.options, ...options })  //merge two objects
      .then (this.sleeper(1000))   //delay time to show Loading
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
  getUser (id) {
    return this.fetchJson(`/users/${id}`)
  }

  getAlbums () {
      return this.fetchJson(`/albums`)
    
  }
  getUserAlbums (user) {
      return this.fetchJson(`/albums?userId=${user}`)
  }

  getPosts () {
      return this.fetchJson(`/posts`)
  }

  getUserPosts (user) {
    return this.fetchJson(`/posts?userId=${user}`)
}
  sleeper(ms) {
    return function(x) {
      return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
  }
}

export default RouterApiService
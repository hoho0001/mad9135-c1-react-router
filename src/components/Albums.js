import React from 'react'
import AppHeader from './AppHeader'
import AlbumCard from './AlbumCard'

import RouterApiService from '../RouterApiService'

const rapi = new RouterApiService()

class Albums extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      loading: true,
      error: null
    }
  }
  buildList = (data) => {
    // console.log(JSON.stringify(data), null, '\t');
    this.setState({
      list: data,
      loading: false,
      error: null
    })
  }
  componentDidMount = () => {
    // this.buildList(await rapi.getUsers())
   
    const uri = (this.props.match.params.user)?`?userId=${this.props.match.params.user}`:``
    const url = `https://jsonplaceholder.typicode.com/albums${uri}`
    fetch (url)
    .then(this.sleeper(1000))
    .then (response => response.json())
    .then(this.buildList)
    .catch(error => { this.setState({error})})
  }

  sleeper(ms) {
    return function(x) {
      return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
  }

  render() {

    const albumJsx = this.state.loading? <div className="Loading">Loading</div> :this.state.list.map(album => (
      <AlbumCard
        key={album.id}
        album={album}
      />
    ));
    return (
      <div>
        <AppHeader title="ALBUMS" />
        <main className="AlbumList" style={{ padding: "1rem" }}>
          {albumJsx}
        </main>
        {this.state.error &&
          <h3>{this.state.error}</h3>
        }
      </div>
    )
  }
}

export default Albums
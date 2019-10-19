// Lien Ho Hoang - 2019-10-19
import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import AppHeader from './AppHeader'
import AlbumCard from './AlbumCard'
import Loading from './Loading'

import RouterApiService from '../RouterApiService'

const rapi = new RouterApiService()

class Albums extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      id: '',
      loading: true,
      error: null
    }
  }
  buildList = (data) => {
    // console.log(JSON.stringify(data), null, '\t');
    this.setState({
      list: data,
      id: this.props.match.params.userId,
      loading: false,
      error: null
    })
  }

  getData = () => {
    let getAlbumList = (this.props.match.params.userId) ? rapi.getUserAlbums(this.props.match.params.userId) : rapi.getAlbums()
    getAlbumList
    .then(data => this.buildList(data))
    .catch(error => this.setState({error, loading: false}))
  }

  componentDidMount =  () => {
    this.getData()   
  }

  componentDidUpdate = () => {

    if (this.props.match.params.userId !== this.state.id) 
    {
      console.log('didUpdate')
      this.getData()
    }
  }

  render() {

    const albumJsx = this.state.loading? <Loading /> :this.state.list.map(album => (
      <AlbumCard
        key={album.id}
        album={album}
      />
    ));
    return (
      <div>
        <AppHeader title="ALBUMS" />
        <CSSTransitionGroup component="div" className="CardList"
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={1200}
        transitionEnterTimeout={1250}
        transitionLeaveTimeout={1225}>
        {albumJsx}
      </CSSTransitionGroup>
        {/* <main className="AlbumList" style={{ padding: "1rem" }}>
          {albumJsx}
        </main> */}
        
        {this.state.error &&
          <h3>{this.state.error}</h3>
        }
      </div>
    )
  }
}

export default Albums
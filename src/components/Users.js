import React from 'react'
import AppHeader from './AppHeader'
import UserCard from './UserCard'
import Loading from './Loading'
import './Users.css'

import RouterApiService from '../RouterApiService'

const rapi = new RouterApiService()

class Users extends React.Component {
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
    const url = `https://jsonplaceholder.typicode.com/users`
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
  getPosts = async (targetUser) => {
    this.props.history.push(`/posts/${targetUser.id}`)
  }
  getAlbums = async targetUser => {
     this.props.history.push(`/albums/${targetUser.id}`)

  }

  render() {
    const userJsx = this.state.loading? <Loading /> :this.state.list.map(user => (
        <UserCard
          key={user.id}
          user={user}
          handleGetPosts={this.getPosts} 
          handleGetAlbums={this.getAlbums}/>
      ));
      
    
    return (
      <div>
        <AppHeader title="USERS" />
        <main className="ProfileList" style={{ padding: "1rem" }}>
          {userJsx}
        </main>
        {this.state.error &&
          <h3>{this.state.error}</h3>
        }
      </div>
    )
  }
}

export default Users
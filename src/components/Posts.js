import React from 'react'
import AppHeader from './AppHeader'
import PostCard from './PostCard'
import RouterApiService from '../RouterApiService'

const rapi = new RouterApiService()
class Posts extends React.Component {
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
    const url = `https://jsonplaceholder.typicode.com/posts${uri}`
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
    const postJsx = this.state.loading? <div className="Loading">Loading</div> :this.state.list.map(post => (
      <PostCard
        key={post.id}
        post={post}
      />
    ));
    return (
      <div>
        <AppHeader title="POSTS" />
        <main className="PostList" style={{ padding: "1rem" }}>
          {postJsx}
        </main>
        
        {this.state.error &&
          <h3>{this.state.error}</h3>
        }
      </div>
    )
  }
}

export default Posts
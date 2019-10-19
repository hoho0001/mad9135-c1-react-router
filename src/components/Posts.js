// Lien Ho Hoang - 2019-10-19
import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import AppHeader from './AppHeader'
import PostCard from './PostCard'
import Loading from './Loading'
import RouterApiService from '../RouterApiService'

const rapi = new RouterApiService()

class Posts extends React.Component {
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
    let getPostList = (this.props.match.params.userId) ? rapi.getUserPosts(this.props.match.params.userId) : rapi.getPosts()
    getPostList
    .then(data => this.buildList(data))
    .catch(error => this.setState({error}))
  }

  // getData1 = () => {
  //   const uri = (this.props.match.params.userId)?`?userId=${this.props.match.params.userId}`:``
  //   // const uri = (this.props.location.userId)?`?userId=${this.props.location.userId}`:``
  //   // console.log(uri)
  //   const url = `https://jsonplaceholder.typicode.com/posts${uri}`
  //   fetch (url)
  //   .then(rapi.sleeper(1000))
  //   .then (response => response.json())
  //   .then(data => {
  //     this.buildList(data)
  //   })
  //   .catch(error => { this.setState({error})})
  // }
  componentDidMount =  () => {
    // this.buildList(await rapi.getUsers())
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
    const postJsx = this.state.loading? <Loading /> :this.state.list.map(post => (
      <PostCard
        key={post.id}
        post={post}
      />
    ));
    return (
      <div>
        <AppHeader title="POSTS" />
        <CSSTransitionGroup component="div" className="CardList"
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={1200}
        transitionEnterTimeout={1250}
        transitionLeaveTimeout={1225}>
        {postJsx}
      </CSSTransitionGroup>
        {/* <main className="PostList" style={{ padding: "1rem" }}>
          {postJsx}
        </main> */}
        
        {this.state.error &&
          <h3>{this.state.error}</h3>
        }
      </div>
    )
  }
}

export default Posts
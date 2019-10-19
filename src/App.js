// Lien Ho Hoang - 2019-10-19
import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import UserDetail from './components/UserDetail'
import Users from './components/Users'
import Albums from './components/Albums'
import AlbumsUser from './components/AlbumsUser'
import Posts from './components/Posts'
import RouterApiService from './RouterApiService'

import './App.css'


const rapi = new RouterApiService()


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true,
      error: null
    }
  }

  getData = () => {
    rapi.getUsers()
      .then(data => this.setState({ list: data, loading: false }))
      .catch(error => this.setState({ error, loading: false }))
  }

  componentDidMount = () => {
    this.getData()
  }
  
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <nav className="Navigation">
            <NavLink to='/users' className="Navigation">Users</NavLink>
            <NavLink to={`/posts`} className="Navigation">Posts</NavLink>
            <NavLink to={`/albums`} >Albums</NavLink>
          </nav>


          <Switch>
            <Route exact path='/users' render={(props) => (<Users list={this.state.list} loading={this.state.loading} />)} />

            <Route exact path='/users/:userId' render={(props) => {
              let userPosition = props.location.pathname.replace('/users/', '')
              console.log(userPosition)
              return (
                <UserDetail userId={userPosition} />
              )
            }}
            />


            <Route exact path='/posts' component={Posts} />
            <Route exact path='/users/posts/:userId' component={Posts} />
            <Route exact path='/albums' component={Albums} />
            <Route path='/users/albums/:userId' component={Albums} />
            <Route exact path='/' render={(props) => (<Users list={this.state.list} loading={this.state.loading} />)} />

          </Switch>
        </div>

      </BrowserRouter>

    );
  }
}

export default App;

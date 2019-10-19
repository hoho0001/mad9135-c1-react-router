// Lien Ho Hoang - 2019-10-19
import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import UserDetail from './components/UserDetail'
import Users from './components/Users'
import Albums from './components/Albums'
import Posts from './components/Posts'

import './App.css'



function App () {
const baseURL = "/mad9135-c1-react-router"
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="Navigation">
            <NavLink to={`${baseURL}/users`} className="Navigation">Users</NavLink>
            <NavLink to={`${baseURL}/posts`} className="Navigation">Posts</NavLink>
            <NavLink to={`${baseURL}/albums`} >Albums</NavLink>
          </nav>


          <Switch>
            <Route exact path='/users' component={Users} />
            <Route exact path='/posts' component={Posts} />
            <Route exact path='/albums' component={Albums} />
            <Route exact path='/users/:userId' component={UserDetail} />
            <Route exact path='/users/posts/:userId' component={Posts} />
            <Route path='/users/albums/:userId' component={Albums} />
            <Route exact path='/' component={Users} />
{/* <Route exact path='/users/:userId' render={(props) => {
              let userPosition = props.location.pathname.replace('/users/', '')
              console.log(userPosition)
              return (
                <UserDetail userId={userPosition} />
              )
            }}
            /> */}
          </Switch>
        </div>

      </BrowserRouter>

    );
  }


export default App;

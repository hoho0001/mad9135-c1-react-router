// Lien Ho Hoang - 2019-10-19
import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import baseURL from "./baseURL"
import UserDetail from './components/UserDetail'
import Users from './components/Users'
import Albums from './components/Albums'
import Posts from './components/Posts'

import './App.css'



function App () {
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="Navigation">
            <NavLink to={`${baseURL}/users`} className="Navigation">Users</NavLink>
            <NavLink to={`${baseURL}/posts`} className="Navigation">Posts</NavLink>
            <NavLink to={`${baseURL}/albums`} >Albums</NavLink>
          </nav>


          <Switch>
            <Route exact path={`${baseURL}/users`} component={Users} />
            <Route exact path={`${baseURL}/posts`} component={Posts} />
            <Route exact path={`${baseURL}/albums`} component={Albums} />
            <Route exact path={`${baseURL}/users/:userId`} component={UserDetail} />
            <Route path={`${baseURL}/users/albums/:userId`} component={Albums} />
            <Route exact path={`${baseURL}/users/posts/:userId`} component={Posts} />
            <Route path={`${baseURL}/users/albums/:userId`} component={Albums} />
            <Route exact path={`${baseURL}/`} component={Users} />
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

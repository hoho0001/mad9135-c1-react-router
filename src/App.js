import React from 'react';
import { BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'
import Users from './components/Users'
import Albums from './components/Albums'
import Posts from './components/Posts'
import './App.css'


// import './App.css';

class App extends React.Component {

  render() {
    
    return (
      <BrowserRouter>
      <div className="App">
        <nav>
        <NavLink to='/users' >Users</NavLink>
          <NavLink to={`/posts`} >Posts</NavLink>
          <NavLink to={`/albums`}>Albums</NavLink>
        </nav>
        <Switch>
          <Route exact path='/users' component={Users} />
          <Route exact path='/posts' component={Posts} />
          <Route path='/posts/:user' component={Posts} />
          <Route exact path='/albums' component={Albums} />
          <Route path='/albums/:user' component={Albums} /> 
          <Route exact path='/' component={Users} />

          {/* <Route exact path='/' render ={(props) => (
            <Users list={this.state.list} />
          )} /> */}
        </Switch>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;

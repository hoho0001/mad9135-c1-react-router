// Lien Ho Hoang - 2019-10-19
import React from 'react'
import baseURL from "./baseURL"
import Loading from './Loading'
import { NavLink } from 'react-router-dom'
import RouterApiService from '../RouterApiService'
import AppHeader from './AppHeader'

const rapi = new RouterApiService()

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loading: true,
      error: null
    }
  }

  getData = () => {
    // if (this.props.computeMatch.params.userId) {
      rapi.getUser(this.props.match.params.userId)
        .then(data => this.setState({ user: data, loading: false }))
        .catch(error => this.setState({ error, loading: false }))
    
  }

  componentDidMount = () => {
    this.getData()
  }


  render() {
    const userJsx = this.state.loading ? <Loading /> :
      <div className="UserDetail">
        <div className="card-body">
          <p className="user-name">
            {this.state.user.name}
            <br />
          </p>
          <p className="">Username: <b>{this.state.user.username}</b></p>
          <p className="">Email: <b>{this.state.user.email}</b></p>
          <p className="">Phone: <b>{this.state.user.phone}</b></p>
          <p className="">Website: <b>{this.state.user.website}</b></p>
          <p className="">Company name: <b>{this.state.user.company.name}</b></p>
          <p className="">Address: <b>{this.state.user.address.suit} {this.state.user.address.street}, {this.state.user.address.city}, {this.state.user.address.zipcode}</b></p>
          <br></br>
          <div><NavLink className="link" to={`${baseURL}/users/posts/${this.state.user.id}`} >
            <button className="button">View Posts</button> </NavLink>
            <NavLink className="link" to={`${baseURL}/users/albums/${this.state.user.id}`} >
            <button className="button">View Albums</button> </NavLink></div>
        </div>

      </div>

    return (
      <div>
        <AppHeader title="USERS" />
        <div className="Profile" style={{ padding: "1rem" }}>
          {userJsx}
        </div>
      </div>

    )
  }
}


export default UserDetail
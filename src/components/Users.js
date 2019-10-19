// Lien Ho Hoang - 2019-10-19
import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import AppHeader from './AppHeader'
import UserCard from './UserCard'
import Loading from './Loading'
import RouterApiService from '../RouterApiService'

const rapi = new RouterApiService()


class Users extends React.Component {
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

  render(){


  const userJsx = this.state.loading ? <Loading /> : this.state.list.map(user => (
    <UserCard
      key={user.id}
      user={user}
    />
  ));

  return (
    <div>
      <AppHeader title="USERS" />
      <CSSTransitionGroup component="div" className="CardList"
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={1200}
        transitionEnterTimeout={1250}
        transitionLeaveTimeout={1225}>
        {userJsx}
      </CSSTransitionGroup>
      {/* <main className="ProfileList" style={{ padding: "1rem" }}>
        {userJsx}
      </main> */}
    </div>
  )
}}


export default Users
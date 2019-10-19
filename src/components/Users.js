// Lien Ho Hoang - 2019-10-19
import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import AppHeader from './AppHeader'
import UserCard from './UserCard'
import Loading from './Loading'


function Users(props) {

  const userJsx = props.loading ? <Loading /> : props.list.map(user => (
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
}


export default Users
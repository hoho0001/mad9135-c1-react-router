// Lien Ho Hoang - 2019-10-19
import React from 'react'
import baseURL from "./baseURL"
import { NavLink } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

import './UserCard.css'
import icon from '../img/UserIcon.svg'

function UserCard(props) {
  return (
    <CSSTransitionGroup component="div" className="CardList"
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={1200}
        transitionEnterTimeout={1250}
        transitionLeaveTimeout={1225}>
<NavLink className="link" to={`${baseURL}/users/${props.user.id}`} >
      <div className="UserCard">
        <div className="user-avatar">
          <img src={icon} alt="User Icon"></img>
        </div>
        <div className="card-body" >
          <p className="user-name">
            {props.user.name}
            <br />
          </p>
          <p className="user-login">{props.user.username}</p>
          <p className="user-email">{props.user.email}</p>
        </div>
      </div>
    </NavLink>    
    </CSSTransitionGroup>
  );
}

export default UserCard;
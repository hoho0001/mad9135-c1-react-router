// Lien Ho Hoang - 2019-10-19
import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import './Loading.css'

function Loading() {
  return (
    <CSSTransitionGroup component="div" className="Loading"
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={1200}
        transitionEnterTimeout={1250}
        transitionLeaveTimeout={1225}>
        <div className="Loading">
      Loading ... 
     </div>
      </CSSTransitionGroup>
    // <div className="Loading">
    //   Loading ... 
    // </div>
  );
}

export default Loading;
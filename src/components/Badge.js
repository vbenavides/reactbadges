import React from 'react';

import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="Logo de la conferencia"></img>
        </div>

        <div className="badge_section-name">
          <img src="https://www.gravatar.com/avatar?d=identicon" alt=" Avatar"></img>
          <h1>Vicente <br></br> Benavides</h1>
        </div>

        <div className="badge_section-info" >
          <h3>Frontend Engineer</h3>
          <div>@vbenavides</div>
        </div>

        <div className="badge_footer" >
          #Platziconf
        </div>

      </div>
    )
  }
}

export default Badge;
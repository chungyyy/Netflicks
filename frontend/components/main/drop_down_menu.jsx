import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const DropDownMenu = ({logout}) => {
  return (
    <div className="drop-down-menu">
      {logout}
    </div>
  )
}

export default DropDownMenu;
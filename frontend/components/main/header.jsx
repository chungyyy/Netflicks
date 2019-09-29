import React from 'react';
import DropDownMenu from './drop_down_menu';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
      showSearchBar: false,
    };

    this.handleMenu = this.handleMenu.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }

  handleMenu() {
    if (this.state.showMenu) {
      this.setState({
        showMenu: false,
      });
    } else {
      this.setState({
        showMenu: true,
      });
    }
  }

  handleSearch() {
    if (this.state.showSearchBar) {
      this.setState({
        showSearchBar: false,
      });
    } else {
      this.setState({
        showSearchBar: true,
      });
    }
  }

  render() {
    const Menu = this.state.showMenu ? (
      <DropDownMenu
        logout={this.props.logout}
      />
    ) : (
        <div></div>
    )

    const headerClass = this.props.headerPinned ? "top-main-pinned" : "top-main";

    return (
      <div className={headerClass}>
        <div className="index-header">
          <div className="index-subheader-1">
            <Link to="/browse" className="nf-main-logo"><img src={window.nflogoURL} /></Link>
          </div>
          <div className="index-subheader-2">
            <i className="fas fa-search"></i>
            <div className="index-subheader-1" onMouseEnter={this.handleMenu} onMouseLeave={this.handleMenu}>
              <Link to="/browse" className="profile-button"><img src={window.profileURL} /></Link>
              <i className="fas fa-sort-down"></i>
              {Menu}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
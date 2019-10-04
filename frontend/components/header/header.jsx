import React from 'react';
import DropDownMenu from '../main/drop_down_menu';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
      showSearchBar: false,
      searchField: "",
    };

    this.handleMenu = this.handleMenu.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.updateSearchField = this.updateSearchField.bind(this);
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

  updateSearchField(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value,
      }, () => {
        if (this.state.searchField.length === 0) {
          this.props.notSearching();
          this.props.history.push(`/browse`);
          this.props.clearSearchedVideos();
          clearTimeout(this.searchTimeOut)
        } else {
          clearTimeout(this.searchTimeOut);
          this.props.isSearching(this.state.searchField);
          this.props.history.push(`/search/${this.state.searchField}`);
          this.searchTimeOut = setTimeout(() => {
            this.props.fetchSearchedVideos(this.state.searchField);
          }, 1000);
        }
      })
    };
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
    const searchBar = this.state.showSearchBar ? (
      <form className="search-bar-container">
        <i className="fas fa-search" onClick={this.handleSearch}></i>
        <input className="search-bar" type="text"
          value={this.state.searchField}
          onChange={this.updateSearchField("searchField")}
          placeholder="Titles, genres"
        />
      </form>
    ) : (
        <i className="fas fa-search" onClick={this.handleSearch}></i>
    )

    return (
      <div className={headerClass}>
        <div className="index-header">
          <div className="index-subheader-1">
            <Link to="/browse" className="nf-main-logo"><img src={window.nflogoURL} /></Link>
          </div>
          <div className="index-subheader-2">
            {searchBar}
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

export default withRouter(Header);
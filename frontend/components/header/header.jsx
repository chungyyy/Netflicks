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
    this.myInputRef = React.createRef();

    this.handleMenu = this.handleMenu.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.updateSearchField = this.updateSearchField.bind(this);
    this.resetSearchField = this.resetSearchField.bind(this);
    this.backToBrowse = this.backToBrowse.bind(this);
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
        searchField: "",
      });
    } else {
      this.setState({
        showSearchBar: true,
      }, () => {this.myInputRef.current.focus();});
    }
  }

  resetSearchField() {
    if (this.props.match.path === '/browse') {
      this.setState({
        showSearchBar: false,
        searchField: "",
      });
    };
  }

  backToBrowse() {
    this.setState({
      showSearchBar: false,
      searchField: "",
    }, () => {
      if (this.state.searchField.length === 0) {
        this.props.notSearching();
        this.props.history.push(`/browse`);
        this.props.clearSearchedVideos();
      }
    })
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
        <input 
          className="search-bar" 
          type="text"
          ref={this.myInputRef}
          value={this.state.searchField}
          onChange={this.updateSearchField("searchField")}  
          onBlur={this.resetSearchField}
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
            <Link to="/browse" className="nf-main-logo"><img src={window.nflogoURL} onClick={this.backToBrowse}/></Link>
            <Link to="/browse" className="link-text"><p onClick={this.backToBrowse}>Home</p></Link>
            <Link to="/browse" className="link-text"><p>My List</p></Link>
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
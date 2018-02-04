import React, { Component } from 'react';
import Header from './components/common/Header';
import Navbar from './components/common/Navbar';
import Infobox from './components/common/Infobox';
import Footer from './components/common/Footer';
import Greeting from './components/common/Greeting'
import observer from './models/observer';
import { Route, NavLink as Link, Switch } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import LogoutPage from './components/User/LogoutPage';
import AboutPage from './components/UserComponents/About/AboutSection'
import CatalogPage from './components/Catalog/CatalogPage'
import CreatePostPage from './components/Post/CreatePostPage'
import EditPostPage from './components/Post/EditPostPage'
import DeletePost from './components/Post/DeletePost'
import MyPostsPage from './components/Catalog/MyPosts'
import DetailsPage from './components/Post/DetailsPage'
import DeleteCommentPage from './components/Post/DeleteCommentPage'
import './style/site.css'
import './style/header.css'
import './style/menu.css'
import './style/notifications.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false, username: '' };
    observer.onSessionUpdate = this.onSessionUpdate.bind(this);
  }

  componentDidMount() {
    this.onSessionUpdate();
  }

  onSessionUpdate() {
    let name = sessionStorage.getItem("username");
    if (name) {
      this.setState({ loggedIn: true, username: sessionStorage.getItem("username") });
    } else {
      this.setState({ loggedIn: false, username: '' });
    }
  }

  render() {
    let navbar = {};
    if (!this.state.loggedIn) {
      navbar = null
    } else {
      navbar = (
        <Navbar className='menu'>
          <div className="title">Navigation</div>
          <Link to="/catalog" className="nav" id="linkCatalog" >Catalog</Link>
          <Link to="/post-create" className="nav" id="linkMenuMyMessages">Submit Link</Link>
          <Link to="/my-posts" className="nav" id="linkMyPosts">My Posts</Link>
        </Navbar>
      );
    }

    return (
      <div id="app">
        <header>
          <span className="logo">&#9731;</span><span className="header">SeenIt</span>
          <Greeting user={this.state.username}/>
        </header>
        <main className='content'>
          <Header loggedIn={this.state.loggedIn} user={this.state.username}>
            {navbar}
          </Header>
          <Infobox />
          <Switch>
            <Route path='/about' component={AboutPage} />
            <Route path='/logout' component={LogoutPage} />
            <Route path='/catalog' component={CatalogPage} />
            <Route path='/edit/:id' component={EditPostPage} />
            <Route path='/delete/comment/:id' component={DeleteCommentPage} />
            <Route path='/delete/:id' component={DeletePost} />
            <Route path='/post-create' component={CreatePostPage} />
            <Route path='/my-posts' component={MyPostsPage} />
            <Route path='/comment/:id' component={DetailsPage} />
            <Route path='/' exact component={HomePage} />
          </Switch>
          <Footer />
        </main>
      </div>
    )
  }
}

export default App;

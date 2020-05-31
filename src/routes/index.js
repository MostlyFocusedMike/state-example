import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PostsPage from '../pages/PostsPage';
import HomePage from '../pages/HomePage';
import PostPage from '../pages/PostPage';

const Routes = () => {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/posts/:postId" component={ PostPage } />
            <Route path="/posts" component={ PostsPage } />
            <Route path="/" component={ HomePage }>
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default Routes;
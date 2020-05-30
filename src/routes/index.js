import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PostsPage from '../pages/PostsPage';

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
            <Route path="/posts">
              <PostsPage />
            </Route>
            <Route path="/">
              <>
                <h1>Hi</h1>
              </>
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default Routes;
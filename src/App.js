import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WishList from './pages/Wishlist';
import GlobalStyle from './GlobalStyle';
import Add from './pages/Add';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/:id">
          <WishList />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

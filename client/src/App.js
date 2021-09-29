import React from 'react';
import './GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import GlobalStyles from './GlobalStyles';
import Register from './pages/auth/Register';
import MainFeed from "./pages/feed/MainFeed";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/feed/:nickname" component={MainFeed} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

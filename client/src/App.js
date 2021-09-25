import React from 'react';
import './GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import GlobalStyles from './GlobalStyles';
import Register from './pages/auth/Register';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

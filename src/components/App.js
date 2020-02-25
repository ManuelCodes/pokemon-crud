import React from 'react';
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom';

import List from './nationalPokedex/List';
import Login from './login';
import New from './nationalPokedex/New';


class App extends React.Component {

  render() {

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/national-pokedex" exact component={List} />
            <Route path="/national-pokedex/new" exact component={New} />
            <Route path="/" exact component={Login} />
            <Route path="/404" component={() => <div> not found </div>} />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;

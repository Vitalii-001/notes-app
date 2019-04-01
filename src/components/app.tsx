
import React, { Component, Fragment } from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import './app.scss';
import { MainMenu } from './main-menu/main-menu';
import { Main } from '../scenes/main';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <MainMenu />
          </Toolbar>
        </AppBar>
        <Main />
      </Fragment>
    );
  }
}

export default App;


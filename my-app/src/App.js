import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Shock from './components/Shock.js';


import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {GridList, GridTile} from 'material-ui/GridList';

const shockStyle = {
  width:100,
}

const gridStyle = {
    width: 1000,
    overflowY: 'auto',
}

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muitheme={getMuiTheme(lightBaseTheme)}>
      <div className="App">
        <AppBar title="Welcome to the end of the world"/>
         <GridList style={gridStyle} cellHeight={850}>
            <GridTile>
              <Shock style={shockStyle}/>
            </GridTile>
            <GridTile>
              <Shock style={shockStyle}/>
            </GridTile>
             <GridTile>
               <Shock style={shockStyle}/>
            </GridTile>
             <GridTile>
                <Shock style={shockStyle}/>
            </GridTile>
          </GridList>
      </div>
      </MuiThemeProvider>
);
  }
}

export default App;

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};


export class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Tab One" value={0} />
          <Tab label="Tab Two" value={1} />
          <Tab label="Tab Three" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

 

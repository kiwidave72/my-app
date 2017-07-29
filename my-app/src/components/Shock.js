import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';

import injectTapEventPlugin from 'react-tap-event-plugin';

const style = {
  margin: 20,
  textAlign: 'left',
  display: 'inline-block',
};
const subHeaderStyle = {
}

const TextFieldStyle ={
  width:80,
  margin:72,

}
const dividerStyle = {
    
}

const buttonStyle = {
    
}

const divStyle = {
}

export default class Shock extends Component
{
  render()
  {
    return(
    <div>
         <Paper style={style} zDepth={2}>
          <div style={divStyle}>

          <Subheader style={subHeaderStyle}>Springs and Shocks</Subheader>
          <Subheader style={subHeaderStyle} inset={true}>Spring</Subheader>
          <TextField style={TextFieldStyle}
              name="SpringLength"
              maxLength='5'
              floatingLabelText="Length" underlineShow={false} />
          <TextField style={TextFieldStyle}
              name="SpringRate"
              maxLength='5'
              floatingLabelText="Rate" underlineShow={false} />
          <TextField style={TextFieldStyle}
              name="SpringPreload"
              maxLength='5'
              floatingLabelText="Pre-Load" underlineShow={false} />
          <Subheader style={subHeaderStyle} inset={true}>Shock</Subheader>
          <TextField style={TextFieldStyle} 
              name="TotalShockLength"
              maxLength='5'
              floatingLabelText="Length"
              underlineShow={false} />
          </div>
        </Paper>

    </div>
    );
    
  }
}
/*
public readonly float SpringRate;
    public readonly float SpringLength;
    public readonly float SpringPreload;
    public readonly float TotalShockLength;
    */
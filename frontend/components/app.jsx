import React from 'react';
import SynthContainer from './synth/synth_container';


export default class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(<div>Hello from App <SynthContainer /></div>);
  }
}

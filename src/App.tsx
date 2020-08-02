import React from 'react';
import './App.css';
import {RootContainer} from './RootStyles';
import IncomeSummary from './Components/IncomeSummary/IncomeSummary';


class App extends React.Component {
  render(){
    return (
      <RootContainer>
        <IncomeSummary/>
      </RootContainer>
    );
  }
}

export default App;

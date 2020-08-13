import React from "react";
import "./App.css";
import { RootContainer } from "./RootStyles";
import IncomeSummary from "./Components/IncomeSummary/IncomeSummary";
import { NavBar } from "./Components/NavBar";
import { Body } from "./Components/Body";
import Theme, { MuiTheme } from "./Theme";

class App extends React.Component {
  render() {
    return (
      <Theme>
        <MuiTheme>
          <RootContainer>
            <NavBar />
            <Body />
          </RootContainer>
        </MuiTheme>
      </Theme>
    );
  }
}

export default App;

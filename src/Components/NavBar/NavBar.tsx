import React, { Component } from "react";
import {Toolbar, Typography } from "@material-ui/core";
import { Header, NavContainer, MenuContainer,MenuItem } from './NavBarStyles';


export interface INavBarProps {}

export interface INavBarState {}

export default class NavBar extends React.Component<
  INavBarProps,
  INavBarState
> {
  constructor(props: INavBarProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <NavContainer>
          <Header>
            <Toolbar>
              <Typography variant="h6" noWrap>
                Finac
              </Typography>
            </Toolbar>
          </Header>
          <MenuContainer>
              <MenuItem selected={true}>Earnings</MenuItem>
              <MenuItem selected={false}>Savings</MenuItem>
          </MenuContainer>
      </NavContainer>
    );
  }
}

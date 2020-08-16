import * as React from 'react';
import { BodyRoot } from './BodyStyles';
import IncomeTable from './../IncomeTable/IncomeTable';


export interface IBodyProps {
}

export interface IBodyState {
}

export default class Body extends React.Component<IBodyProps, IBodyState> {
  constructor(props: IBodyProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <BodyRoot>
        <IncomeTable/>
      </BodyRoot>
    );
  }
}

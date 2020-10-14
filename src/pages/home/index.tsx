import React from 'react';
import { Button } from 'antd';
import { inject, observer, observable, action } from '@global/mobx';
import styles from './index.less';

interface IProps {
  appState?: any;
}

interface IState {
  count: number;
}
@inject('appState')
@observer
class Home extends React.Component<IProps, IState> {
  @observable public t = 0;

  constructor(props: IProps) {
    super(props);
  }
  public render() {
    const { appState } = this.props;
    const { count, increase, decrease } = appState;
    console.log(appState, this.t);
    return (
      <div>
        <div>{this.props.appState.count}</div>
        <Button onClick={() => increase()} style={{ marginRight: 10 }}>
          increase
        </Button>
        <Button onClick={() => decrease()}>decrease</Button>
        <div>-------------</div>
        <div>{this.t}</div>
        <Button onClick={() => this.add()}>t add</Button>
      </div>
    );
  }

  @action
  public add() {
    console.log(this.t);
    this.t++;
  }
}

export default Home;

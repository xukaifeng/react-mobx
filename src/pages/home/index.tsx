import React from 'react';
import { Button } from 'antd';
import { inject, observer } from '@global/mobx';
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
  constructor(props: IProps) {
    super(props);
  }
  public render() {
    const { appState } = this.props;
    const { count, increase, decrease } = appState;
    console.log(appState);
    return (
      <div>
        <div>{count}</div>
        <Button onClick={() => increase()} style={{ marginRight: 10 }}>
          increase
        </Button>
        <Button onClick={() => decrease()}>decrease</Button>
      </div>
    );
  }
}

export default Home;

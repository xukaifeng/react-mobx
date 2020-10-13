import React, { Suspense, lazy } from 'react';
import { ConfigProvider, Spin } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { Provider } from '@global/mobx';
import { BrowserRouter, Switch } from 'react-router-dom';
import BasicLayout from './layout/index';
import routes from './routers';
import GenerateRouter from '@utils/generateRouter';
import rootStates from './states';

class App extends React.Component {
  public render() {
    console.log(rootStates);
    return (
      <Provider {...rootStates}>
        <ConfigProvider locale={zhCN}>
          <BasicLayout>
            <BrowserRouter>
              <Suspense fallback={<Spin />}>
                <Switch>
                  {routes.map((route, index) => {
                    return <GenerateRouter key={index} {...route} />;
                  })}
                </Switch>
              </Suspense>
            </BrowserRouter>
          </BasicLayout>
        </ConfigProvider>
      </Provider>
    );
  }
}

export default App;

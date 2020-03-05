import React from 'react';
import { Row } from 'antd';
import { store } from './store';
import { Provider } from 'react-redux';

import TaskSetter from './components/TaskSetter';
import ListContainer from './containers/ListContainer';

import './App.css';

const App = props => {

  return (
    <Provider store={store}>
      <Row>
        <TaskSetter />
        <ListContainer 
          from={'todo'}
          where={'progress'}
        />
        <ListContainer 
          from={'progress'}
          where={'done'}
        />
        <ListContainer 
          from={'done'}
        />
      </Row>
    </Provider>
  );
}

export default App;

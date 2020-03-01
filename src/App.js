import React from 'react';
import { Row } from 'antd';
import { store } from './store';
import { Provider } from 'react-redux';

import TodoList from './components/lists/TodoList';
import ProgressList from './components/lists/ProgressList';
import DoneList from './components/lists/DoneList';
import TaskSetter from './components/TaskSetter';

import './App.css';

const App = props => {

  return (
    <Provider store={store}>
      <Row>
        <TaskSetter />
        <TodoList />
        <ProgressList />
        <DoneList />
      </Row>
    </Provider>
  );
}

export default App;

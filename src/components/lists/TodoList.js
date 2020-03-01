import React from 'react';
import { Col, Badge } from 'antd';
import { connect } from 'react-redux';
import List from './List';
import { actionCreator } from '../../store/reducers';

const TodoList = ({ todo, move }) => (
    <Col span={8}>
        <>
            <h1>Todos <Badge count={todo.length} /></h1>
        </>
        <List 
            tasks={todo} 
            tagColor={'magenta'} 
            handleClick={move} 
        />
    </Col>
);

export default connect(
    ({ todo }) => ({
        todo,
    }),
    dispatch => ({
        move: task => dispatch(
            actionCreator('MOVE', { from: 'todo', where: 'progress', task })
        )
    })
)(TodoList);

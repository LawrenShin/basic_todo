import React from 'react';
import { Col, Badge } from 'antd';
import { connect } from 'react-redux';
import List from './List';
import { actionCreator } from '../../store/reducers';

const colorPicker = from => {
    switch(from){
        case 'todo':
            return 'magenta';
        case 'progress':
            return 'cyan';
        default:
            return 'volcano'
    }
}

const TodoList = ({ tasksArr, move, from }) => (
    <Col span={8}>
        <>
            <h1>
                {`${from[0].toUpperCase()}${from.split('').splice(1,from.length).join('')}`} 
                <Badge count={tasksArr.length} />
            </h1>
        </>
        <List 
            tasks={tasksArr}
            tagColor={colorPicker(from)}
            handleClick={from === 'done' ? null : move}
        />
    </Col>
);

export default connect(
    (state, { from }) => ({
        tasksArr: state[`${from}`]
    }),
    (dispatch, { from, where }) => ({
        move: task => dispatch(
            actionCreator('MOVE', { from, where, task })
        )
    })
)(TodoList);

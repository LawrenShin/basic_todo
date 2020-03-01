import React from 'react';
import { Col, Badge } from 'antd';
import { connect } from 'react-redux';
import List from './List';
import { actionCreator } from '../../store/reducers';

const ProgressList = ({ progress, move }) => (
    <Col span={8}>
        <>
            <h1>In progress <Badge count={progress.length} /></h1>
        </>
        <List 
            tasks={progress} 
            tagColor={'cyan'} 
            handleClick={move} 
        />
    </Col>
);

export default connect(
    ({ progress }) => ({
        progress,
    }),
    dispatch => ({
        move: task => dispatch(
            actionCreator('MOVE', { from: 'progress', where: 'done', task })
        )
    })
)(ProgressList);

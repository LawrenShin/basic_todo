import React from 'react';
import { Col, Badge } from 'antd';
import { connect } from 'react-redux';
import List from './List';

const DoneList = ({ done }) => (
    <Col span={8}>
        <>
            <h1>Done <Badge count={done.length} /></h1>
        </>
        <List 
            tasks={done} 
            tagColor={'volcano'} 
            handleClick={null} 
        />
    </Col>
);

export default connect(
    ({ done }) => ({
        done,
    })
)(DoneList);

import React from 'react';
import { Col, Tag } from 'antd';

const List = ({ tasks, tagColor, handleClick }) => {
    const renderChildren = task => (
        <Tag 
            key={`${Math.random()}${task}`} 
            color={tagColor}
            onClick={handleClick && (() => handleClick(task))}>
                {task}
        </Tag>
    )

    return (
        <Col span={8}>
            {
                tasks.map(task => renderChildren(task))
            }
        </Col>
    );
}

export default List;

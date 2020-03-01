import React, {useState} from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { actionCreator } from '../store/reducers';

const TaskSetter = props => {
    const [task, setTask] = useState('');
    return (
        <Input 
            value={task}
            onChange={e => setTask(e.target.value)}
            onPressEnter={e => {
                if(e.target.value) props.addTodo(e.target.value);
                setTask('');
            }}
            placeholder={'Add task'} />
    );
}

export default connect(
    undefined,
    dispatch => ({
        addTodo: payload => dispatch(actionCreator('ADD_TODO', payload)),
    })
)(TaskSetter);
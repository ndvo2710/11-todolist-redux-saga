import React, { useEffect, useState } from 'react';
import './TodoList.css';
import bg from './bg.png';
import { useDispatch, useSelector } from 'react-redux';
import { GET_TASKLIST_API } from '../../redux/constants/ToDoListConst';


export default function TodoListSaga() {
    const dispatch = useDispatch();
    const {taskList} = useSelector(state => state.TodoListReducer)
    console.log(taskList);

    const [localState, setlocalState] = useState({
        taskList: [],
        values: {
            taskName: ''
        },
        errors: {
            taskName: ''
        }
    })
    
    const handleChange = (e) => {
        const { value, name } = e.target ;
        let newValues = {...localState.values};
        newValues = {...newValues, [name]: value };
        let newErrors = {...localState.errors}; 
        let regexString = /^[a-z A-Z]+$/;

        if (!regexString.test(value) || value.trim() === '') {
            newErrors[name] = name + ' invalid !';
        } else {
            newErrors[name] = '';
        }

        setlocalState({
            ...localState,
            values: newValues,
            errors: newErrors
        })
    }

    const getTaskList = () => {
        // Dispatch action saga
        dispatch({
            type: GET_TASKLIST_API
        })
    }

    useEffect(() => {
        getTaskList();
        return () => {

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const addTask = () => {
        
    }

    const renderTaskToDo = () => {
        return taskList.filter(item => !item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={() => {
                    }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button type="button" className="complete" onClick={() => {
                    }}>
                        <i className="far fa-check-circle" />
                        <i className="fas fa-check-circle" />
                    </button>
                </div>
            </li>
        })
    }

    const renderTaskToDoDone = () => {
        return taskList.filter(item => item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={() => {
                    }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button type="button" className="complete" onClick={() => {
                    }}>
                        <i className="far fa-undo" />
                        <i className="fas fa-undo" />
                    </button>
                </div>
            </li>
        })
    }

    return (
        <div className="card">
            <div className="card__header">
                <img src={bg} alt='bg.png' />
            </div>
            <form className="card__body">
                <div className="card__content">
                    <div className="card__title">
                        <h2>My Tasks</h2>
                        <p>September 9,2020</p>
                    </div>
                    <div className="card__add">
                        <input id="newTask" name="taskName" type="text" placeholder="Enter an activity..." onChange={handleChange} />
                        <button id="addItem" type="submit" onClick={addTask}>
                            <i className="fa fa-plus" />
                        </button>
                    </div>
                    <div className="card__todo">
                        {/* Uncompleted tasks */}
                        <ul className="todo" id="todo">
                            {renderTaskToDo()}
                        </ul>
                        {/* Completed tasks */}
                        <ul className="todo" id="completed">
                            {renderTaskToDoDone()}
                        </ul>
                    </div>
                </div>
            </form>
        </div>

    )
}

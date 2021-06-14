import React, { useState } from 'react';
import './TodoList.css';
import bg from './bg.png';
import { useSelector } from 'react-redux';


export default function TodoListSaga() {
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

    const addTask = () => {
        
    }

    const renderTaskToDo = () => {

    }

    const renderTaskToDoDone = () => {
        
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

import React from 'react';
import './TodoList.css';
import bg from './bg.png';

export default function TodoListSaga() {
    const handleChange = () => {

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

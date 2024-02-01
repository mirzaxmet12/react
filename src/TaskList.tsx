import React from "react";

function TasksList(){
    const tasks:string[]=[
        'Complete homework',
        'Go grocery shopping',
        'Read a book',
        'Exercise for 30 minutes',
        'Write a journal entry'
    ]
    

    return(
        <div className="Tasks-list">
            <h2>Tasks list</h2>
            <ul>
                {tasks.map((item:string)=>(<li>{item}</li>))}
            </ul>
        </div>
    )
}
export default TasksList

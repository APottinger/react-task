import { FaTimes, FaBell } from 'react-icons/fa'
const Task = ({ task, onDelete, toggleReminder }) => {
    return (
        <div onDoubleClick={() => toggleReminder(task.id)}>
            <h3><FaBell style={{cursor: 'pointer'}} className={`task ${task.reminder ? 'reminder' : ''}`} />{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{color: 'red', cursor: 'pointer'}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task

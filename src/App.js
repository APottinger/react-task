import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctors Appt',
          day: 'Feb 5th at 2:30pm',
          reminder: true
      }, 
      {
          id: 2,
          text: 'Meeting PTA',
          day: 'Feb 11th at 8:3apm',
          reminder: false
      },
      {
          id: 3,
          text: 'Conference Board Meeting',
          day: 'Feb 8th at 10:00am',
          reminder: true
      }
    ]);

    //DELETE A TASK 
    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id))
    }

    //TOGGLE REMINDER
    const toggleReminder = (id) => {
      setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder } : task))
    }

  return (
    <div className="container">
      <Header title='Keep Moving Upward'/>
      
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder}/> : 'You have no tasks...'}
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Understand ReactJS better' },
    { id: 'cg2', text: 'Understand JS better' },
    { id: 'cg3', text: 'Create a cool mobile app' },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className='course-goal'>
      <h2>Course Goals</h2>
      <NewGoal addNewGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;

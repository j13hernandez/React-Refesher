import './NewGoal.css';
import { useState } from 'react';

const NewGoal = ({ addNewGoal }) => {
  const [inputText, setInputText] = useState('');

  const newGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: inputText,
    };
    setInputText('');
    addNewGoal(newGoal);
  };

  const textChangeHandler = (event) => {
    setInputText(event.target.value);
  };

  return (
    <form className='new-goal' onSubmit={newGoalHandler}>
      <input type='text' value={inputText} onChange={textChangeHandler} />
      <button type='submit'>Add Goal</button>
    </form>
  );
};

export default NewGoal;

import { set } from "mongoose";
import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = (props) => {
  return <button onClick={props.onclick}>{props.text}</button>;
};

const App = () => {
  //const {name, age} = props
  /*const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  const addLeft = () => {
    setAll(allClicks.concat('L'))
    setClicks({...clicks, left: clicks.left + 1})
    const updatedTotal = clicks.left + clicks.right
    setTotal(updatedTotal)
  }
  const addRight = () => {
    setAll(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right + 1})
    const updatedTotal = clicks.left + clicks.right
    setTotal(updatedTotal)
  }
  const reset = () => {
    setClicks({ left: 0, right: 0 })
    setAll([])
  }*/
  const [selected, setSelected] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])
  const mostVoted = 0
  const handleClick = (opc) => () => {
    switch(opc){
      case 'p':
        if(selected-1 < 0)
          setSelected(anecdotes.length-1)
        else
          setSelected(selected-1)
        break
      case 'n':
        if(selected+1 == anecdotes.length)
          setSelected(0)
        else
          setSelected(selected+1)
        break
    }
  }

  const handleVote = (num) => () => {
    const votesCopy = [...votes]
    votesCopy[num]++
    setVotes(votesCopy)
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Anecdote {selected+1} has {votes[selected]} votes</p>
      <Button text="previous" onclick={handleClick('p')}></Button>
      <Button text="vote" onclick={handleVote(selected)}></Button>
      <Button text="next" onclick={handleClick('n')}></Button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[votes.findIndex((num) => num == Math.max.apply(null, votes))]}</p>
      <p>has {votes.find((num) => num == Math.max.apply(null, votes))} votes</p>
    </div>
  );
};

export default App;

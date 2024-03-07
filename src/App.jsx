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
  
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)


  return (
    <div>
      <p>give feedback</p>
      <Button onclick={()=>setGood(good+1)} text="good"></Button>
      <Button onclick={()=>setNeutral(neutral+1)} text="neutral"></Button>
      <Button onclick={()=>setBad(bad+1)} text="bad"></Button>
    </div>
  );
};

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState()
  const [bottles, setBottles] = useState()
  const [time, setTime] = useState()
  const [result, setResult] = useState()
  const [sex, setSex] = useState("male")
  
  const handleOnChange = (e) => {
    setSex(e.target.value);
  }

  const calculate = (e) => {
    e.preventDefault()
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsLeft = grams - (burning * time)

    // tulos miehille = gramsLeft / (weight * 0.7)
    // tulos naisille = gramsLeft / (weight * 0.6)
    if(sex === 'male'){
      setResult((gramsLeft / (weight * 0.7)).toFixed(2))
    }

    if(sex === 'female'){
      setResult((gramsLeft / (weight * 0.6)).toFixed(2))
    }
 
  }
    
  return (
    <div>
      <h2>Calculating alcohol blood level</h2>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles</label>
          <input type="number" value={bottles} onChange={e => setBottles(e.target.value)}/>
        </div>
        <div>
          <label>Time</label>
          <input type="number" value={time} onChange={e => setTime(e.target.value)}/>
        </div>
        <div>
          <label>Gender</label>
            <input type="radio" value="male" name="gender" onChange={e => handleOnChange(e)} checked={sex === "male"}/> Male
            <input type="radio" value="female" name="gender" onChange={e => handleOnChange(e)} checked={sex === "female"}/> Female
        </div>
        <div>
          <label>Blood alcohol level: </label>
          <output>{result}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;

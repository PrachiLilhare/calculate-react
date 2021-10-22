import React,{useState}  from 'react';
import './App.css';

function App() {
  const [result,setResult] = useState("");

  const onClickHandler = (e) => {
      setResult(result.concat(e.target.name));
  }

  const onClickClear = () => {
      setResult("");
  }

  const onClickBackspace = () => {
      setResult(result.slice(0,-1));
  }

  const onClickCalculate = () => {
    try{
      let ans = eval(result).toString();
      // console.log(ans);
      if(ans!=="NaN"){
        // console.log(ans);
        setResult(ans);
      }
      else{
        setResult("Error");
      }
    }catch(err){
      setResult("Incorrect Value");
    }
    
  }

  return (
    <>
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button className="highlight" onClick={onClickClear} id="clear">Clear</button>
        <button className="highlight" onClick={onClickBackspace} id="backspace">C</button>
        <button className="highlight" name="/" onClick={onClickHandler}>&divide;</button>
        <button name="7" onClick={onClickHandler}>7</button>
        <button name="8" onClick={onClickHandler}>8</button>
        <button name="9" onClick={onClickHandler}>9</button>
        <button className="highlight" name="*" onClick={onClickHandler}>&times;</button>
        <button name="4" onClick={onClickHandler}>4</button>
        <button name="5" onClick={onClickHandler}>5</button>
        <button name="6" onClick={onClickHandler}>6</button>
        <button className="highlight" name="-" onClick={onClickHandler}>&ndash;</button>
        <button name="1" onClick={onClickHandler}>1</button>
        <button name="2" onClick={onClickHandler}>2</button>
        <button name="3" onClick={onClickHandler}>3</button>
        <button className="highlight" name="+" onClick={onClickHandler}>+</button>
        <button name="0" onClick={onClickHandler}>0</button>
        <button name="." onClick={onClickHandler}>.</button>
        <button className="highlight"  onClick={onClickCalculate} id="equalsTo">=</button>
      </div>
    </div>
    <footer>
      <p>Created By <span>&hearts; Prachi Lilhare &hearts;</span></p>
    </footer>

    </>
  );
}

export default App;

import React, {useState} from "react";
import "./main.css";

const Main = () => {
  const [value , setValue] = useState("")

  const HandleBtn = (e)=>{
    setValue(value.concat(e.target.name))
  }

  const HandleAnswer = ()=>{
    setValue(eval(value).toString())
  }

  const HandleAC = ()=>{
    setValue("")
  }

  const HandleC = ()=>{
    setValue(value.slice(0 , value.length - 1))
  }

  return (
    <>
      <div className="container">
        <div className="fitem">
          <div className="row">
            <input type="text" className="input" value={value} />
          </div>
          <div className="row">
            <button className="button" name="" id="Clear"  onClick={HandleAC}>AC</button>
            <button className="button" name="C" id="color" onClick={HandleC}>C</button>
            <button className="button" name="/" id="color" onClick={HandleBtn}>&divide;</button>
            <button className="button" name="7" onClick={HandleBtn}>7</button>
            <button className="button" name="8" onClick={HandleBtn}>8</button>
            <button className="button" name="9" onClick={HandleBtn}>9</button>
            <button className="button" name="*" id="color" onClick={HandleBtn}>&times;</button>
            <button className="button" name="4" onClick={HandleBtn}>4</button>
            <button className="button" name="5" onClick={HandleBtn}>5</button>
            <button className="button" name="6" onClick={HandleBtn}>6</button>
            <button className="button" name="-" id="color" onClick={HandleBtn}>-</button>
            <button className="button" name="1" onClick={HandleBtn}>1</button>
            <button className="button" name="2" onClick={HandleBtn}>2</button>
            <button className="button" name="3" onClick={HandleBtn}>3</button>
            <button className="button" name="+" id="color" onClick={HandleBtn}>+</button>
            <button className="button" name="0" onClick={HandleBtn}>0</button>
            <button className="button" name="." id="color" onClick={HandleBtn}>.</button>
            <button className="button" name="=" id="Equal"  onClick={HandleAnswer}>=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

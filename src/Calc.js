import React, { useState } from "react";

const Calc = () => {

    const [inputVal, setInputVal]= useState("")
  return (
    <div className="container">
        <div className="input-container">
            <input type="text" value={inputVal} onChange={(e) =>{setInputVal(e.target.value)}} />

        </div>
        <div className="btn-container">
            <button className="buttons" value="1" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>1</button>
            <button className="buttons" value="2" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>2</button>
            <button className="buttons" value="3" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>3</button>
            <button className="buttons" value="+" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>+</button>
            <button className="buttons" value="4" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>4</button>
            <button className="buttons" value="5" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>5</button>
            <button className="buttons" value="6" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>6</button>
            <button className="buttons" value="-" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>-</button>
            <button className="buttons" value="7" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>7</button>
            <button className="buttons" value="8" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>8</button>
            <button className="buttons" value="9" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>9</button>
            <button className="buttons" value="*" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>*</button>
            <button className="buttons" value="0" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>0</button>
            <button className="buttons" value="00" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>00</button>
            
            <button className="buttons" value="AC" onClick={(e)=>{setInputVal(inputVal.slice(0, -1))}}>AC</button>
            <button className="buttons" value="/" onClick={(e)=>{setInputVal(inputVal+e.target.value)}}>/</button>
            <button className="buttons" value="CE" onClick={(e)=>{setInputVal("")}}>CE</button>
            <button className="buttons" id="equal" value=" = " onClick={(e)=>{
                try{
                    setInputVal(eval(inputVal))
                }catch{
                    console.log(Error);
                }
            }}>=</button>



        </div>
    </div>
  )
}

export default Calc

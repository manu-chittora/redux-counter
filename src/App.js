import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions/index'
const App = () => {
  const myState=useSelector((state)=>state.changeNumber);
  const dispatch=useDispatch();
  return (
    <div className="App">
    <h1>Counter</h1>
    <div onClick={()=>dispatch(incNumber())} className="plus"><h2 className="sign">+</h2></div>
    <div className="result"><h2>{myState}</h2></div>
    <div onClick={()=>dispatch(decNumber())} className="minus"><h2 className="sign">-</h2></div>
    </div>
  )
}
export default App

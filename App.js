import React,{useState} from "react"
import "./index.css"
const App = () => {

const [count,setCount] = useState(0)

  return(
    <div>
      <h1>State Counter Application</h1>
      <h2>Current value of State is: {count}</h2>
      <div className="container Ok">
  <div className="row">
    <div className="col-sm">
    <button onClick={() => setCount(0)} type="button" className="btn btn-info">Reset</button>   
<br />
    </div>
    <div className="col-sm">
    <button onClick={() => count > 9?"":setCount(count+1)} type="button" className="btn btn-info">Increment</button>
    </div>
    <div className="col-sm">
    <button onClick={() => count < 1?"":setCount(count-1)} type="button" className="btn btn-info">Decrement</button>    </div>
  </div>
</div>
   </div>
 )}

export default App;
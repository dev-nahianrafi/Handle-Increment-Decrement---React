import { useState } from "react";



function App() {
  let [count, setcount] = useState("0")
  let [eror, seteror] = useState("")

  let handleIncrement = () => {
    if(count >= 10){
      seteror("10 er beshi allow na")
    }else{
      count++
      setcount(count)
      seteror("")
    }
  }
  let handleDecrement = () => {
    if(count <= 0){
      seteror("-value allow na")
    }else{
      count--
      setcount(count)
      seteror(eror)
    }
  }

  return (
    <>
        <div className="main">
            <button onClick={handleIncrement} className="increment">Increment</button>
            <h2>your number is: {count}</h2>
            <button onClick={handleDecrement} className="Decrement">Decrement</button>
            <p>{eror}</p>
        </div>
    </>
  )
}

export default App

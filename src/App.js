import React, { useState, useEffect } from "react";

function App() {
 const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {
    document.title = text;
  }, [text]);


  useEffect(() => {
    console.log("useEffect called");
    setTimeout(() => setCount(0), 5000)
  },[]);
 
  console.log("Component rendering");

  return <div>
          <button onClick={() => setCount(count => count + 1)}>
            i have been clicked {count} times
          </button>;
          <input type="text"
            placeholder="type a away...."
            value={text}
            onChange = {e => setText(e.target.value)} />
       </div>
}

export default App;

import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState(null)
  async function handleGetAdvice() {
    const response = await fetch(`https://api.adviceslip.com/advice`)
    const advice = await response.json();
    setAdvice(advice);
  }
  return(
    <>
      {advice && <h1>{advice.slip.advice}</h1>}
      <button onClick={handleGetAdvice}>Get random advice</button>
    </>
  )
}

export default App;
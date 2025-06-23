import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(false);
  async function handleGetAdvice() {
    setLoading(true);
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const advice = await response.json();
    setAdvice(advice);
    setLoading(false);
  }
  return (
    <>
      {advice && <h2>{advice.slip.advice}</h2>}
      <button onClick={handleGetAdvice} disabled = {loading}>
        {loading ? "please wait..." : "Get random advice"}
      </button>
    </>
  );
}

export default App;

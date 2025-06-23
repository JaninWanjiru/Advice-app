import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function handleGetAdvice() {
    setLoading(true);
    try {
      const response = await fetch(`https://api.adviceslip.com/advice`);
      const advice = await response.json();
      setAdvice(advice);
    } catch (e) {
      setError("Something went wrong");
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    handleGetAdvice();
  }, []);

  return (
    <>
      <div className="app-container">
        {error && <h2>{error}</h2>}
        <h1>Advice API</h1>
        <div className="loader">{loading && <PuffLoader />}</div>
        {advice && <h2>{advice.slip.advice}</h2>}
        <button onClick={handleGetAdvice} disabled={loading}>
          New advice
        </button>
      </div>
    </>
  );
}

export default App;

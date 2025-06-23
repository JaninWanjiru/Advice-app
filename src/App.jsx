import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

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
      {error && <h2>{error}</h2>}
      <h1>Advice API</h1>
      {loading && <PuffLoader color="#36d7b7" />}
      {advice && <h2>{advice.slip.advice}</h2>}
      <button onClick={handleGetAdvice} disabled={loading}>
        Get random advice
      </button>
    </>
  );
}

export default App;

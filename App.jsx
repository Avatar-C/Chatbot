import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: inputText }),
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div>
      <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={handleSubmit}>Generate</button>
      <p>Response: {response}</p>
    </div>
  );
}

export default App;


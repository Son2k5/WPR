import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>Hello, I'm visible!</p>}
    </div>
  );
}

export default App;

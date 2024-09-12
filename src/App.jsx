import { useState } from "react"

function App() {

  const [login, setLogin] = useState(false);

  function loginPressed() {
    setLogin(true);
  }




  return (
    <div>
      <button onClick={loginPressed}>Login</button>
    </div>
  );
}

export default App

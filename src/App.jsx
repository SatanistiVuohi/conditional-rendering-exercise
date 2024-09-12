import { useState } from "react"

function App() {

  const [login, setLogin] = useState(false);

  const buttonText = login ? 'Logout' : 'Login'

  function loginPressed() {
    setLogin(true);
  }

  return (
    <div>
      <h3>Welcome!!</h3>
      <button onClick={loginPressed}>{buttonText}</button>
    </div>
  );
}

export default App

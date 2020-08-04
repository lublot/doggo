import React from "react";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLogin (event) {
    event.preventDefault()
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(json => {
      console.log(json)
    })
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          name="username"
          onChange={(target) => setUsername(target.value) }
        />

        <input
          type="password"
          value={password}
          name="username"
          onChange={(target) => setPassword(target.value) }
        />

        <button >
          Entrar
        </button>
      </form>
    </section>
  );
};

export default LoginForm;

import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  });

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
  }

  async function handleLogin(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input
          type="text"
          name="username"
          label="Username"
          {...username}
          // onChange={(target) => setUsername(target.value) }
        />

        <Input
          type="password"
          name="password"
          label="Senha"
          {...password}
          // onChange={(target) => setPassword(target.value) }
        />

        <Button disabled>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;

import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import bcrypt from 'bcrypt';

import api from '../../services/api';
import { login } from '../../services/auth';

import '../../styles/pages/login.css';
import logo from '../../images/logo-vertical.svg';

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const encryptedPassword = bcrypt.hash(password, 10);

    api.post('/auth', { email, encryptedPassword })
      .then((response) => {
        login(response.data.token);
        history.push('/app');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div id="page-login">
      <aside>
        <header>
          <img src={logo} alt="Happy" />
        </header>
        <footer>
          <p><strong>Caxias</strong></p>
          <p>Maranhão</p>
        </footer>
      </aside>
      <div id="page-container">
        <main>
          <form onSubmit={handleSubmit} className="login-form">
            <fieldset>
              <legend>Fazer login</legend>

              <div className="input-block">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </fieldset>

            <div className="input-block">
              a
            </div>

            <button type="submit" className="confirm-button">Entrar</button>
          </form>
        </main>
      </div>
    </div>
  );
}

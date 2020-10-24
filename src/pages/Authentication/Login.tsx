import React, { useState, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';

import LargeSidebar from 'components/LargeSidebar';

import 'styles/pages/authentication/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory();

  function handleLogin(event: FormEvent) {
    event.preventDefault();
    history.push('/dashboard');
  }

  return (
    <div id="page-login">
      <LargeSidebar />
      <main>
        <form onSubmit={handleLogin} className="login-form">
          <fieldset>
            <legend>Fazer login</legend>

            <div className="input-block">
              <label htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="password">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="inline-inputs">
              <div className="checkbox-block">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <label htmlFor="rememberMe">
                  Lembrar-me
                </label>
              </div>

              <Link className="forgot-link" to="/forgotPassword">Esqueci minha senha</Link>
            </div>

            <div className="input-block">
              <button type="submit" className="login-button">
                Entrar
              </button>
            </div>
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default Login;

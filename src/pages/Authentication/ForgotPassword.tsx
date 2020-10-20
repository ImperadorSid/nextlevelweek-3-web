import React, { useState, FormEvent } from 'react';
import LargeSidebar from 'components/LargeSidebar';

import 'styles/pages/authentication/forgot-password.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  function handleForgotPassword(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div id="page-forgot-password">
      <LargeSidebar />
      <main>
        <form onSubmit={handleForgotPassword} className="forgot-password-form">
          <fieldset>
            <legend>Esqueci a senha</legend>

            <p>Sua redefinição de senha será enviada para o e-mail cadastrado.</p>

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

export default ForgotPassword;

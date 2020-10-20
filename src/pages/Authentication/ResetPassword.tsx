import React, { useState, FormEvent } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import LargeSidebar from 'components/LargeSidebar';

import 'styles/pages/authentication/reset-password.css';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);

  function handleResetPassword(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div id="page-reset-password">
      <LargeSidebar />
      <main>
        <form onSubmit={handleResetPassword} className="reset-password-form">
          <fieldset>
            <legend>Redefinição de senha</legend>

            <p>Escolha uma nova senha para você acessar o dashboard do Happy</p>

            <div className="input-block">
              <label htmlFor="password">
                Nova senha
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {showPassword
                ? (
                  <FiEyeOff
                    className="toggle-visibility"
                    size={24}
                    color="#15C3D6"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )
                : (
                  <FiEye
                    className="toggle-visibility"
                    size={24}
                    color="#8FA7B2"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
            </div>

            <div className="input-block">
              <label htmlFor="verifyPassword">
                Repetir senha
              </label>
              <input
                type={showVerifyPassword ? 'text' : 'password'}
                id="verifyPassword"
                value={verifyPassword}
                onChange={(event) => setVerifyPassword(event.target.value)}
              />
              {showVerifyPassword
                ? (
                  <FiEyeOff
                    className="toggle-visibility"
                    size={24}
                    color="#15C3D6"
                    onClick={() => setShowVerifyPassword(!showVerifyPassword)}
                  />
                )
                : (
                  <FiEye
                    className="toggle-visibility"
                    size={24}
                    color="#8FA7B2"
                    onClick={() => setShowVerifyPassword(!showVerifyPassword)}
                  />
                )}
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

export default ResetPassword;

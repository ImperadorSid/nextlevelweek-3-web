import React from 'react';

import 'styles/components/large-sidebar.css';

import logoVertical from 'images/logos/logo-vertical.svg';

export default function LargeSidebar() {
  return (
    <aside className="login-large-sidebar">
      <header>
        <img src={logoVertical} alt="Happy Logo" />
      </header>

      <footer>
        <strong>Caxias</strong>
        <span>Maranhão</span>
      </footer>
    </aside>
  );
}

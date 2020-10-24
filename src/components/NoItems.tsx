import React from 'react';

import 'styles/components/no-items.css';

import emptyLogo from 'images/logos/empty-logo.svg';

export default function NoItems() {
  return (
    <div className="no-items">
      <img src={emptyLogo} alt="Logo vazio" />
      <p>Nenhum no momento</p>
    </div>
  );
}

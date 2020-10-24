import React from 'react';
import { Link } from 'react-router-dom';

import 'styles/pages/create-orphanage/finish-create.css';

export default function FinishCreate() {
  return (
    <div id="page-finish-create">
      <div className="finish-create">
        <main>
          <h1>Ebaaa!</h1>

          <p>
            O cadastro deu certo e foi enviado
            ao administrador para ser aprovado.
            Agora é só esperar :)
          </p>

          <Link to="/app">Voltar para o mapa</Link>
        </main>
      </div>
    </div>
  );
}

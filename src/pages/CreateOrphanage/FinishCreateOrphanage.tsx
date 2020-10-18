import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/pages/finish-create-orphanage.css';

export default function FinishCreateOrphanage() {
  return (
    <div id="page-finish">
      <div className="content-wrapper">
        <div id="main-content">
          <main>
            <h1>Ebaaa!</h1>
            <p>
              O cadastro deu certo e foi enviado ao administrador para ser aprovado.
              Agora é só esperar :)
            </p>
          </main>

          <Link to="/app" className="back-to-map">Voltar para o mapa</Link>
        </div>
      </div>
    </div>
  );
}

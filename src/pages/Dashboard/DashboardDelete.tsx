import React from 'react';
import { Link } from 'react-router-dom';

import 'styles/pages/dashboard/dashboard-delete.css';

export default function DashboardDelete() {
  return (
    <div id="page-dashboard-delete">
      <div className="dashboard-delete">
        <main>
          <h1>Excluir!</h1>

          <p>
            Você tem certeza que quer
            excluir Orf. Esperança?
          </p>

          <Link to="/app">Voltar para o mapa</Link>
        </main>
      </div>
    </div>
  );
}

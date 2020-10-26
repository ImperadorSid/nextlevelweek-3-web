import React, { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import api from 'services/api';

import 'styles/pages/dashboard/dashboard-delete.css';

export default function DashboardDelete() {
  const { goBack } = useHistory();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    api.delete(`/orphanages/${params.id}`)
      .then((_response) => {})
      .catch((_error) => goBack());
  }, [params.id, goBack]);

  return (
    <div id="page-dashboard-delete">
      <div className="dashboard-delete">
        <main>
          <h1>Excluído!</h1>

          <p>Infelizmente, o orfanato foi deletado ;(</p>

          <Link to="/app">Voltar para o mapa</Link>
        </main>
      </div>
    </div>
  );
}

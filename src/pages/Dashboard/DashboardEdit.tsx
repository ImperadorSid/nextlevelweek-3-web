import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FiCheck, FiXCircle } from 'react-icons/fi';

import Orphanage from 'models/Orphanage';
import Sidebar from 'components/Sidebar';
import OrphanageForm from 'components/OrphanageForm';
import api from 'services/api';

import 'styles/pages/dashboard/dashboard-edit.css';

export default function CreateOrphanage() {
  const history = useHistory();
  const params = useParams<{ id: string }>();

  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [pending, setPending] = useState(true);

  useEffect(() => {
    api.get(`/orphanages/${params.id}`).then((response) => {
      setOrphanage(response.data);
      setPending(response.data.pending);
    });
  }, [params.id]);

  if (!orphanage) {
    return <h1>Carregando</h1>;
  }

  async function updateOrphanage(data: Orphanage) {
    const completeData = data;
    completeData.pending = pending;

    await api.put(`/orphanages/${params.id}`, completeData);
    history.push('/app');
  }

  return (
    <div id="page-edit-orphanage">
      <Sidebar />

      <main>
        <p>
          Editar perfil de
          {' '}
          {orphanage.name}
        </p>
        <div className="pending-options">
          <button type="button" className="accept-new" onClick={() => setPending(false)}>
            <FiCheck />
            Aceitar
          </button>
          <button type="button" className="reject-new" onClick={() => history.push(`/dashboard/delete/${params.id}`)}>
            <FiXCircle />
            Recusar
          </button>
        </div>
        <OrphanageForm orphanage={orphanage} postData={updateOrphanage} />
      </main>
    </div>
  );
}

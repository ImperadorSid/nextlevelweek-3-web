import React from 'react';
import { useHistory } from 'react-router-dom';

import Orphanage from 'models/Orphanage';
import Sidebar from 'components/Sidebar';
import OrphanageForm from 'components/OrphanageForm';
import api from 'services/api';

import 'styles/pages/create-orphanage/create-orphanage.css';

export default function CreateOrphanage() {
  const history = useHistory();

  async function createOrphanage(data: Orphanage) {
    await api.post('/orphanages', data);
    history.push('/app');
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <OrphanageForm postData={createOrphanage} />
      </main>
    </div>
  );
}

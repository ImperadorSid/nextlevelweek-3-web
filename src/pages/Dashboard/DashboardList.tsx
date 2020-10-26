import React, { useEffect, useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import DashboardMenu from 'components/DashboardMenu';
import OrphanageCard from 'components/OrphanageCard';
import NoItems from 'components/NoItems';

import api from 'services/api';

import 'styles/pages/dashboard/dashboard-list.css';

export default function DashboardList() {
  const history = useHistory();

  const [orphanages, setOrphanages] = useState([]);

  useEffect(() => {
    api.get('/all-orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-dashboard-list">
      <DashboardMenu activeMenuIndex={0} />
      <main>
        <div className="orphanages-list">
          <header>
            <h1>Orfanatos Cadastrados</h1>
            <p>2 orfanatos</p>
          </header>

          {orphanages.length > 0 ? (
            <div className="orphanages-list-content">
              {orphanages.map((orphanage) => {
                const {
                  id, name, latitude, longitude,
                } = orphanage;
                return (
                  <OrphanageCard orphanage={{
                    id, name, latitude, longitude,
                  }}
                  >
                    <FiEdit3 title="Edit" onClick={() => history.push(`/dashboard/edit/${id}`)} />
                    <FiTrash title="Delete" onClick={() => history.push(`/dashboard/delete/${id}`)} />
                  </OrphanageCard>
                );
              })}
            </div>
          ) : (
            <NoItems />
          )}
        </div>
      </main>
    </div>
  );
}

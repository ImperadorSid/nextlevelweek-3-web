import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import DashboardMenu from 'components/DashboardMenu';
import OrphanageCard from 'components/OrphanageCard';
import NoItems from 'components/NoItems';

import api from 'services/api';
import 'styles/pages/dashboard/dashboard-pending.css';

export default function DashboardPending() {
  const history = useHistory();

  const [orphanages, setOrphanages] = useState([]);

  useEffect(() => {
    api.get('/pending-orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-dashboard-pending">
      <DashboardMenu activeMenuIndex={1} />

      <main>
        <div className="orphanages-pending">
          <header>
            <h1>Cadastros pendentes</h1>
          </header>

          {orphanages.length > 0 ? (
            <div className="orphanages-pending-content">
              {orphanages.map((orphanage) => {
                const {
                  id, name, latitude, longitude,
                } = orphanage;
                return (
                  <OrphanageCard orphanage={{
                    id, name, latitude, longitude,
                  }}
                  >
                    <FiArrowLeft title="Authorize" onClick={() => history.push(`/dashboard/edit/${id}`)} />
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

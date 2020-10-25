import React from 'react';
// import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import DashboardMenu from 'components/DashboardMenu';
import OrphanageCard from 'components/OrphanageCard';
import NoItems from 'components/NoItems';

import 'styles/pages/dashboard/dashboard-pending.css';

export default function DashboardPending() {
  const testOrphanage = {
    id: 4,
    latitude: -4.8632126,
    longitude: -43.3584274,
    name: 'Se não fosse',
  };

  const empty = false;

  return (
    <div id="page-dashboard-pending">
      <DashboardMenu activeMenuIndex={1} />

      <main>
        <div className="orphanages-pending">
          <header>
            <h1>Cadastros pendentes</h1>
          </header>

          <div className="orphanages-pending-content">
            <OrphanageCard orphanage={testOrphanage}>
              <FiArrowLeft title="Authorize" />
            </OrphanageCard>
          </div>

          { empty && <NoItems />}

        </div>
      </main>
    </div>

  );
}

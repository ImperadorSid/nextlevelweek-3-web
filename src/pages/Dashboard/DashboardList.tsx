import React from 'react';
// import { Link } from 'react-router-dom';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import DashboardMenu from 'components/DashboardMenu';
import OrphanageCard from 'components/OrphanageCard';
import NoItems from 'components/NoItems';

import 'styles/pages/dashboard/dashboard-list.css';

const testOrphanage = {
  id: 4,
  latitude: -4.8632126,
  longitude: -43.3584274,
  name: 'Se não fosse',
};
const empty = false;

export default function DashboardList() {
  return (
    <div id="page-dashboard-list">
      <DashboardMenu activeMenuIndex={0} />
      <main>
        <div className="orphanages-list">
          <header>
            <h1>Orfanatos Cadastrados</h1>
            <p>2 orfanatos</p>
          </header>

          <div className="orphanages-list-content">
            <OrphanageCard
              orphanage={testOrphanage}
              buttons={[
                <FiEdit3 />,
                <FiTrash />,
              ]}
            />
            <OrphanageCard
              orphanage={testOrphanage}
              buttons={[
                <FiEdit3 />,
                <FiTrash />,
              ]}
            />
            <OrphanageCard
              orphanage={testOrphanage}
              buttons={[
                <FiEdit3 />,
                <FiTrash />,
              ]}
            />
            <OrphanageCard
              orphanage={testOrphanage}
              buttons={[
                <FiEdit3 title="Edit" />,
                <FiTrash title="Delete" />,
              ]}
            />

          </div>

          {empty && <NoItems />}
        </div>
      </main>
    </div>
  );
}

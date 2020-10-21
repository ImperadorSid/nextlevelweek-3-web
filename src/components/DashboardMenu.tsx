import React from 'react';

import 'styles/components/dashboard-menu.css';

import mapMarkerImg from 'images/utils/map-marker.svg';

export default function DashboardMenu() {
  return (
    <aside className="dashboard-menu">
      <img src={mapMarkerImg} alt="Happy" />

      <div className="dashboard-options">
        <img src={mapMarkerImg} alt="Happy" />
        <img src={mapMarkerImg} alt="Happy" />
      </div>

      <img src={mapMarkerImg} alt="Happy" />

    </aside>
  );
}

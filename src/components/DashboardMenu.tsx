import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiAlertCircle, FiPower } from 'react-icons/fi';

import api from 'services/api';

import 'styles/components/dashboard-menu.css';

import mapMarkerImg from 'images/utils/map-marker.svg';

interface DashboardMenuProps {
  activeMenuIndex: number;
}

export default function DashboardMenu(props: DashboardMenuProps) {
  const { activeMenuIndex } = props;

  const [hasPending, setHasPending] = useState(false);
  useEffect(() => {
    api.get('/pending-orphanages')
      .then((response) => (setHasPending(response.data.length > 0)));
  }, []);

  const buttonIndex = (index: number) => (activeMenuIndex === index ? 'active-menu-button' : 'inactive-menu-button');

  return (
    <aside className="dashboard-menu">
      <Link to="/app">
        <img src={mapMarkerImg} alt="Happy" />
      </Link>

      <div className="dashboard-options">
        <Link to="/dashboard/list">
          <div className={buttonIndex(0)}>
            <FiMapPin size={24} />
          </div>
        </Link>
        <Link to="/dashboard/pending">
          <div className={buttonIndex(1)}>
            <FiAlertCircle size={24} />
          </div>
          {hasPending && activeMenuIndex !== 1 && <div className="dot-badge" />}
        </Link>
      </div>

      <Link to="/login">
        <div className={buttonIndex(2)}>
          <FiPower size={24} />
        </div>
      </Link>

    </aside>
  );
}

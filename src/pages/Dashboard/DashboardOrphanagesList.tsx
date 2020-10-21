import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import DashboardMenu from 'components/DashboardMenu';

import 'styles/pages/dashboard/dashboard-orphanages-list.css';

import mapIcon from 'utils/mapIcon';

export default function DashboardOrphanagesList() {
  return (
    <div id="page-dashboard-orphanages-list">
      <DashboardMenu />
      <main>
        <div className="orphanages-list">
          <header>
            <h1>Orfanatos Cadastrados</h1>
            <p>2 orfanatos</p>
          </header>

          <div className="orphanages-list-content">
            <div className="orphanage-card">
              <Map
                center={[-4.8564336, -43.3570222]}
                zoom={9}
                style={{ width: '100%', height: '75%' }}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                dragging={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                  icon={mapIcon}
                  position={[-4.8564336, -43.3570222]}
                />
              </Map>
              <div className="orphanage-card-info">
                <p>Se não fosse</p>
                <div className="orphanage-card-actions">
                  <Link to="/dashboard/edit/1" className="orphanage-card-button">
                    <FiEdit3 size={20} color="#15C3D6" />
                  </Link>
                  <Link to="/dashboard/delete/1" className="orphanage-card-button">
                    <FiTrash size={20} color="#15C3D6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="orphanage-card">
              <Map
                center={[-4.8564336, -43.3570222]}
                zoom={9}
                style={{ width: '100%', height: '75%' }}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                dragging={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                  icon={mapIcon}
                  position={[-4.8564336, -43.3570222]}
                />
              </Map>
              <div className="orphanage-card-info">
                <p>Essas crianças encheridas</p>
                <div className="orphanage-card-actions">
                  <Link to="/dashboard/edit/1" className="orphanage-card-button">
                    <FiEdit3 size={20} color="#15C3D6" />
                  </Link>
                  <Link to="/dashboard/delete/1" className="orphanage-card-button">
                    <FiTrash size={20} color="#15C3D6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="orphanage-card">
              <Map
                center={[-4.8564336, -43.3570222]}
                zoom={9}
                style={{ width: '100%', height: '75%' }}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                dragging={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                  icon={mapIcon}
                  position={[-4.8564336, -43.3570222]}
                />
              </Map>
              <div className="orphanage-card-info">
                <p>E esse cachorro pancada</p>
                <div className="orphanage-card-actions">
                  <Link to="/dashboard/edit/1" className="orphanage-card-button">
                    <FiEdit3 size={20} color="#15C3D6" />
                  </Link>
                  <Link to="/dashboard/delete/1" className="orphanage-card-button">
                    <FiTrash size={20} color="#15C3D6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="orphanage-card">
              <Map
                center={[-4.8564336, -43.3570222]}
                zoom={9}
                style={{ width: '100%', height: '75%' }}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                dragging={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                  icon={mapIcon}
                  position={[-4.8564336, -43.3570222]}
                />
              </Map>
              <div className="orphanage-card-info">
                <p>Eu teria conseguido</p>
                <div className="orphanage-card-actions">
                  <Link to="/dashboard/edit/1" className="orphanage-card-button">
                    <FiEdit3 size={20} color="#15C3D6" />
                  </Link>
                  <Link to="/dashboard/delete/1" className="orphanage-card-button">
                    <FiTrash size={20} color="#15C3D6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

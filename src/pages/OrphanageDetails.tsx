import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';

import Sidebar from 'components/Sidebar';
import api from 'services/api';

import 'styles/pages/orphanage-details.css';

import mapIcon from 'utils/mapIcon';

interface IOrphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  openingHours: string;
  openOnWeekends: string;
}

interface IOrphanageParams {
  id: string;
}

export default function OrphanageDetails() {
  const params = useParams<IOrphanageParams>();
  const [orphanage, setOrphanage] = useState<IOrphanage>();

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then((response) => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return (<p>Carregando...</p>);
  }

  return (
    <div id="page-orphanage-details">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  icon={mapIcon}
                  interactive={false}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                {orphanage.openingHours}
              </div>
              {orphanage.openOnWeekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos
                  <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos
                  <br />
                  fim de semana
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

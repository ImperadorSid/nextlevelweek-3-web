import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import api from 'services/api';

import 'styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

import mapIcon from 'utils/mapIcon';
import mapMarkerImg from 'images/utils/map-marker.svg';

interface IOrphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Caxias</strong>
          <span>Maranhão</span>
        </footer>
      </aside>

      <Map
        center={[-4.8564336, -43.3570222]}
        zoom={9}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map((orphanage) => (
          <Marker
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
            key={orphanage.id}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`orphanage/${orphanage.id}`}>
                <FiArrowRight size={20} color="#ffffff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Link to="/orphanage/create" className="create-orphanage">
        <FiPlus size={32} color="#ffffff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;

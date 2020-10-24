import React from 'react';
// import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
// import { FiEdit3, FiTrash } from 'react-icons/fi';

import 'styles/components/orphanage-card.css';

import mapIcon from 'utils/mapIcon';

interface OrphanageCardProps {
  orphanage: {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
  };
  buttons: Array<any>;
}

export default function OrphanageCard(props: OrphanageCardProps) {
  const { orphanage, buttons } = props;

  return (
    <div className="orphanage-card">
      <Map
        center={[orphanage.latitude, orphanage.longitude]}
        zoom={15}
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
          position={[orphanage.latitude, orphanage.longitude]}
        />
      </Map>
      <div className="orphanage-card-info">
        <p>{orphanage.name}</p>

        <div className="orphanage-card-actions">
          {buttons.map((button) => (
            <div key={button.type.name} className="orphanage-card-button">
              {button}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

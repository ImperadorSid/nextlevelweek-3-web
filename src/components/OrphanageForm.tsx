import React, { useState, FormEvent } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import Orphanage from 'models/Orphanage';

import 'styles/components/orphanage-form.css';

import mapIcon from 'utils/mapIcon';

interface OrphanageFormProps {
  orphanage?: Orphanage,
  postData: (orphanageData: Orphanage) => void /* eslint no-unused-vars: off */
}

export default function OrphanageForm({
  orphanage = {
    name: '',
    latitude: -4.8632126,
    longitude: -43.3584274,
    about: '',
    instructions: '',
    openingHours: '',
    openOnWeekends: true,
    pending: true,
  },
  postData,
}: OrphanageFormProps) {
  const [name, setName] = useState(orphanage.name);
  const [latitude, setLatitude] = useState(orphanage.latitude);
  const [longitude, setLongitude] = useState(orphanage.longitude);
  const [about, setAbout] = useState(orphanage.about);
  const [instructions, setInstructions] = useState(orphanage.instructions);
  const [openingHours, setOpeningHours] = useState(orphanage.openingHours);
  const [openOnWeekends, setOpenOnWeekends] = useState(orphanage.openOnWeekends);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setLatitude(lat);
    setLongitude(lng);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      name, latitude, longitude, about, instructions, openingHours, openOnWeekends, pending: orphanage.pending,
    };

    postData(data);
  }

  return (
    <form onSubmit={handleSubmit} className="orphanage-data-form">

      <fieldset>
        <legend>Dados</legend>

        <Map
          center={[latitude, longitude]}
          style={{ width: '100%', height: 280 }}
          zoom={15}
          onClick={handleMapClick}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          {latitude !== 0 && (
            <Marker
              icon={mapIcon}
              interactive={false}
              position={[latitude, longitude]}
            />
          )}
        </Map>

        <div className="input-block">
          <label htmlFor="name">
            Nome
          </label>
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="about">
            Sobre
            {' '}
            <span>Máximo de 300 caracteres</span>
          </label>
          <textarea
            id="name"
            maxLength={300}
            value={about}
            onChange={(event) => setAbout(event.target.value)}
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Visitação</legend>

        <div className="input-block">
          <label htmlFor="instructions">
            Instruções
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(event) => setInstructions(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="openingHours">
            Horário de funcionamento
          </label>
          <input
            id="opening_hours"
            value={openingHours}
            onChange={(event) => setOpeningHours(event.target.value)}
          />
        </div>

        <div className="input-block">
          Atende fim de semana
          <div className="button-select">
            <button
              type="button"
              className={openOnWeekends ? 'active' : ''}
              onClick={() => setOpenOnWeekends(true)}
            >
              Sim
            </button>
            <button
              type="button"
              className={!openOnWeekends ? 'active' : ''}
              onClick={() => setOpenOnWeekends(false)}
            >
              Não
            </button>
          </div>
        </div>
      </fieldset>

      <button className="confirm-button" type="submit">
        Confirmar
      </button>

    </form>
  );
}

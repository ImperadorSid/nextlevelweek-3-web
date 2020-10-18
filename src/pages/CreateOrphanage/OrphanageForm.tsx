import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';
import { LeafletMouseEvent } from 'leaflet';
import Sidebar from '../../components/Sidebar';

// Stylesheets
import '../../styles/pages/create-orphanage.css';

// Images
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

export default function OrphanageForm() {
  const history = useHistory();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [openingHours, setOpeningHours] = useState('');
  const [openOnWeekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleSelectedImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => URL.createObjectURL(image));
    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData();

    formData.append('name', name);
    formData.append('about', about);
    formData.append('latitude', String(position.latitude));
    formData.append('longitude', String(position.longitude));
    formData.append('instructions', instructions);
    formData.append('openingHours', openingHours);
    formData.append('openOnWeekends', String(openOnWeekends));
    images.forEach((image) => formData.append('images', image));

    await api.post('/orphanages', formData);

    history.push('/orphanage/create/finish');
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              {
                position.latitude !== 0 && (
                  <Marker
                    icon={mapIcon}
                    interactive={false}
                    position={[
                      position.latitude,
                      position.longitude,
                    ]}
                  />
                )
              }
            </Map>

            <div className="input-block">
              <label htmlFor="name">
                Nome
                <input
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
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

            <div className="input-block">
              Fotos
              <div className="images-container">
                {
                  previewImages.map((image) => (
                    <img src={image} alt={name} />
                  ))
                }
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                  <input
                    multiple
                    type="file"
                    id="image[]"
                    onChange={handleSelectedImages}
                  />
                </label>
              </div>

            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">
                Instruções
                <textarea
                  id="instructions"
                  value={instructions}
                  onChange={(event) => setInstructions(event.target.value)}
                />
              </label>
            </div>

            <div className="input-block">
              <label htmlFor="openingHours">
                Horário de funcionamento
                <input
                  id="opening_hours"
                  value={openingHours}
                  onChange={(event) => setOpeningHours(event.target.value)}
                />
              </label>
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
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;

import React from "react";
import { MapContainer, TileLayer, Popup, Marker, Polygon } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import { icon } from "leaflet";

const Map = () => {
  const map_setup = {
    center: [48.5456, 7.7378],
    zoom: 13,
    scrollWheelZoom: true,
    markers: {
      tps: {
        position: [48.5258, 7.7378],
        message: "TPS",
      },
    },
  };

  return (
    <Container>
      <MapContainer
        center={map_setup.center}
        zoom={map_setup.zoom}
        scrollWheelZoom={map_setup.scrollWheelZoom}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={map_setup.markers.tps.position}
          icon={icon({ iconUrl: markerIcon, iconAnchor: [13, 41] })}
        >
          <Popup>{map_setup.markers.tps.message}</Popup>
        </Marker>
        <Polygon
          positions={[
            [48.5339, 7.7307],
            [48.5312, 7.7102],
            [48.5191, 7.7021],
            [48.5116, 7.7229],
            [48.5229, 7.7431],
          ]}
        >
          <Popup>Près de l'école</Popup>
        </Polygon>
        <Polygon
          positions={[
            [48.5608, 7.7486],
            [48.5688, 7.7336],
            [48.5858, 7.7426],
            [48.5888, 7.7656],
            [48.5808, 7.7806],
            [48.5608, 7.7656],
          ]}
          pathOptions={{ color: "red" }}
        >
          <Popup>Centre ville</Popup>
        </Polygon>
        <Polygon
          positions={[
            [48.5309, 7.7205],
            [48.5628, 7.7386],
            [48.5638, 7.7486],
            [48.5598, 7.7571],
            [48.5264, 7.7351],
          ]}
          pathOptions={{ color: "green" }}
        >
          <Popup>Entre les deux</Popup>
        </Polygon>
      </MapContainer>
    </Container>
  );
};

const Container = styled.div`
  .leaflet-container {
    height: 700px;
    z-index: 0;

    @media (max-width: 1024px) {
      height: auto;
      aspect-ratio: 1/1;
    }
  }
`;

export default Map;

import {  useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { KakaoMapProps } from "../../types/component";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const KakaoMap = (props: KakaoMapProps) => {

  const {myLoca, level} = props;
  //eslint-disable-next-line
  const [location, setLocation] = useState<{ lat : number, lng: number}>({ lat: 33.5563, lng: 126.79581 })
  const accessKey = import.meta.env.VITE_KAKAOMAP_API;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${accessKey}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map'); 
        const mapOption = {
          center: new window.kakao.maps.LatLng(myLoca?.lat ?? 33.5563, myLoca?.lng ?? 126.79581),
          level: level ?? 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(myLoca?.lat ?? 33.5563, myLoca?.lng ?? 126.79581),
          map: map,
        });
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [accessKey, myLoca, level]);

  return(
    <Map
      id="map"
      center={myLoca ? myLoca : location}
      level={level}
      style={{
        width: "320px",
        height: "530px",
        display: "flex",
        margin: "0 auto",
        borderRadius: "10px"
      }}
    >
      <MapMarker
        position={myLoca ? myLoca : location}
      />
    </Map>
  )
}

export default KakaoMap;
import { useCallback, useEffect, useState } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import you from "../../assets/you.svg";

const KakaoMap = () => {
  const [location, setLocation] = useState({ lat: 37.5665, lng: 126.978 });

  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_MAP_API_KEY,
    libraries: ["services"],
  });

  const getUserLocation = useCallback(() => {
    try {
      navigator.geolocation.getCurrentPosition(
        successGetUserLocation,
        faillGetUserLocation,
        { enableHighAccuracy: true }
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const successGetUserLocation = (res: any) => {
    const lat = res.coords.latitude;
    const lng = res.coords.longitude;
    setLocation({ lat, lng });
  };
  const faillGetUserLocation = (error: unknown) => {
    console.log(error);
  };

  const getAddress = useCallback(() => {
    if (!window.kakao || !window.kakao.maps) return;

    const geocoder = new window.kakao.maps.services.Geocoder();
    const coord = new window.kakao.maps.LatLng(location.lat, location.lng);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const callback = (result: any, status: unknown) => {
      console.log(result, status);
      if (status === window.kakao.maps.services.Status.OK) {
        console.log(result[0].address);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    console.log(coord.getLat(), coord.getLng());
  }, [location.lat, location.lng]);
  useEffect(() => {
    const checkKakaoLoaded = setInterval(() => {
      if (window.kakao && window.kakao.maps) {
        clearInterval(checkKakaoLoaded);
        getUserLocation();
        getAddress();
      }
    }, 500);

    return () => clearInterval(checkKakaoLoaded);
  }, [getUserLocation, getAddress]);
  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: location.lat,
        lng: location.lng,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100%",
        borderRadius: "15px",
      }}
      level={3} // 지도의 확대 레벨
    >
      <MapMarker
        position={{ lat: location.lat, lng: location.lng }}
        image={{ src: you, size: { width: 50, height: 50 } }}
      />
    </Map>
  );
};

export default KakaoMap;

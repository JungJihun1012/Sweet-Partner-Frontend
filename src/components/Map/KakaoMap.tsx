import { useEffect } from "react";
import { Map, useKakaoLoader } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_MAP_API_KEY,
  });
  useEffect(() => {
    console.log(import.meta.env.VITE_KAKAO_MAP_API_KEY);
  });
  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100%",
        borderRadius: "15px",
      }}
      level={3} // 지도의 확대 레벨
    />
  );
};

export default KakaoMap;

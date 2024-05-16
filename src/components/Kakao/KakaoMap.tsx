import { useState } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
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
  //eslint-disable-next-line
  const appkey = useKakaoLoader({
    appkey: "c8efbad0c44e59c0db5035317755906c"
  })

  return(
    <Map
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
import { Main } from "../../style/Section/SectionStyle";
import KakaoMap from "../Kakao/KakaoMap";
import Location from "./Location";


const SectionMain = () => {

  return(
    <>
      <Main>
        <Location/>
        <KakaoMap level={4} myLoca={{ lat: 33.5563, lng: 126.79581 }} />
      </Main>
    </>    
  )

}

export default SectionMain;
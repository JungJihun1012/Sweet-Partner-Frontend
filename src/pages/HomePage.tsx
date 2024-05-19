import styled from "styled-components";
import { Mobile } from "../Responsive";
import { UserPartnerInfo } from "../components/UserPartnerInfo/UserPartnerInfo";
import KakaoMap from "../components/Kakao/KakaoMap";

export default function HomePage() {
  return (
    <>
      <Container>
        <Mobile>
          <UserPartnerInfo />
          <KakaoMap level={4} myLoca={{ lat: 33.5563, lng: 126.79581 }} />
        </Mobile>
      </Container>
    </>
  );
}

const Container = styled.div`
  flex: 1;
  padding: 15px 24px;
`;

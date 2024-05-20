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
          <KakaoMap />
        </Mobile>
      </Container>
    </>
  );
}

const Container = styled.div`
  flex: 1;
  padding: 15px 24px;
`;

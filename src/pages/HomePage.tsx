import styled from "styled-components";
import { Mobile } from "../Responsive";
import { UserPartnerInfo } from "../components/UserPartnerInfo/UserPartnerInfo";
import { Map } from "../components/Map/Map";
import { WriteDate } from "../components/WriteDate/WriteDate";

export default function HomePage() {
  return (
    <>
      <Mobile>
        <Container>
          <UserPartnerInfo />
          <WriteDate />
          <Map />
        </Container>
      </Mobile>
    </>
  );
}

const Container = styled.div`
  flex: 1;
  padding: 15px 24px;
  display: flex;
  flex-flow: column;
  gap: 15px;
`;

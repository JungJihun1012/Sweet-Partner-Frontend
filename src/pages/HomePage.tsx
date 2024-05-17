import styled from "styled-components";
import { Mobile } from "../Responsive";
import { UserPartnerInfo } from "../components/UserPartnerInfo/UserPartnerInfo";

export default function HomePage() {
  return (
    <>
      <Container>
        <Mobile>
          <UserPartnerInfo />
        </Mobile>
      </Container>
    </>
  );
}

const Container = styled.div`
  flex: 1;
  padding: 15px 24px;
`;

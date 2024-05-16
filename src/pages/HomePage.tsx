import { Mobile } from "../Responsive";
import { FooterMain } from "../components/Footer/FooterMain";
import FillHug from "../components/Header/FillHug";
import Hug from "../components/Header/Hug";
import Main from "../components/Header/Main";
import SectionMain from "../components/Section/SectionMain";

export default function HomePage() {
  return (
    <>
      <Mobile>
        <Main />
        <Hug>
          <FillHug />
        </Hug>
        <SectionMain />
        <FooterMain />
      </Mobile>
    </>
  );
}

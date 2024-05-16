import { FillHugBackground, IloveYou, Span } from "../../style/Header/HeaderStyle";
import Anniversary from "./Anniversary";
import Valentine from "./Valentine";

const FillHug = () => {
  return(
    <>
      <FillHugBackground>
        <p>
          정지훈❤️정지훈
        </p>
        <IloveYou>
          우리 사랑한지 <Span>100</Span>일
        </IloveYou>
      </FillHugBackground>
      <Anniversary/>
      <Valentine/>
    </>
  )
}

export default FillHug;
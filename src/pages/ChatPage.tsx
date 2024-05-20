import { Mobile } from "../Responsive";
import { FooterMain } from "../components/Footer/FooterMain";
import Header from "../components/Header/Chat/Header";


export default function ChatPage() {
  return(
    <Mobile>
      <Header/>
      <FooterMain/>
    </Mobile>
  )
}
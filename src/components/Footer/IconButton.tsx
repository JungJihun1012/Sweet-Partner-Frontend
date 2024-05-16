import { Image, ImageTag } from "../../style/Footer/FooterStyle";
// import { IconButtonProps } from "../../types/component";


const IconButton = () => {
  return(
    <ImageTag>
      <Image src="/images/Home-icon.png" alt="Home-Page"/>
      <Image src="/images/heart-15-icon.png" alt="HeartPage" />
      <Image src="/images/free-icon-graph-4366075.png" alt="pie-chartPage"/>
      <Image src="/images/alternate-user-icon.png" alt="user-Page"/>
      <Image src="/images/free-icon-chatting-4723518.png" alt="Chatting-Page"/>
    </ImageTag>
  )
}

export default IconButton;
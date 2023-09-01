import { ContainerImg, ContainerNavBar, Images, Title } from "./NavbarStyles"
import me from '../../assets/img/me.png'

const Navbar = () => {
  return (
    <ContainerNavBar>
      <ContainerImg>
        <Images src={me} alt="Photo"/>
      </ContainerImg>
      <Title>@lioespinola1</Title>
    </ContainerNavBar>
  )
}

export default Navbar
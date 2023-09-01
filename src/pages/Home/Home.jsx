// import Button2 from "../../components/Button2/Button2"
import ButtonCTA from "../../components/ButtonCTA/ButtonCTA"
import { ContainerDiv } from "./HomeStyles"

const Home = () => {
  return (
    <ContainerDiv>
      <ButtonCTA name='Mi Sitio Web' description='Explora mi sitio web personal' link={"https://github.com/glespinola"} />
      <ButtonCTA name='Portafolio' description='Echa un vistazo a mis proyectos anteriores' link={"https://github.com/glespinola"} />
      <ButtonCTA name='Libros Gratis' description='Descarga mis libros gratuitos' link={"https://www.gutenberg.org/"} />
      <ButtonCTA name='Spotify' description='Escucha mi música en Spotify' link={"https://open.spotify.com/user/espinolagonza15?si=765b490a819a4a81"}/>
      <ButtonCTA name='Contacto' description='Ponte en contacto conmigo' link={"mailto:espinola.gonzalo10@gmail.com"} />
      {/* <Button2 /> */}
    </ContainerDiv> 
  )
}

export default Home
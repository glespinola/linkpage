import styled from "styled-components"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const LayoutContainerStyled = styled.div`
  min-height: 90vh;
  height: auto;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`


// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <LayoutContainerStyled>
      <Navbar />

        {children}

      <Footer />
    </LayoutContainerStyled>
  )
}

export default Layout
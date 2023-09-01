import { ContainerFooter, Discord, GitHub, Instagram, Link, Tooltip, Twitter, Wrapper } from "./FooterStyles"

const Footer = () => {
  return (
    <ContainerFooter>
      <Wrapper>
        <Link href="https://github.com/glespinola" target="_blank" title="GitHub">        
          <GitHub>
            <Tooltip className="tooltip">GitHub</Tooltip>
            <span><i className="fab fa-github"></i></span>
          </GitHub>
        </Link>
        <Link href="https://twitter.com/GonzaloJoh55383" target="_blank" title="Twitter">        
          <Twitter>
            <Tooltip className="tooltip">Twitter</Tooltip>
            <span><i className="fab fa-twitter"></i></span>
          </Twitter>
        </Link>
        <Link href="https://www.instagram.com/lioespinola1/" target="_blank" title="Instagram">
          <Instagram>
            <Tooltip className="tooltip">Instagram</Tooltip>
            <span><i className="fab fa-instagram"></i></span>
          </Instagram>
        </Link>
        <Link href="https://discord.com/users/342723586374500353" target="_blank" title="Discord">
          <Discord>
            <Tooltip className="tooltip">Discord</Tooltip>
            <span><i className="fab fa-discord"></i></span>
          </Discord>
        </Link>
      </Wrapper>  
      <p>Page made with ❤️ by <Link shadow color href="https://github.com/glespinola" target='_blank'>lionel</Link></p>
    </ContainerFooter>
  )
}

export default Footer
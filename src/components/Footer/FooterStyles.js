import styled from 'styled-components';
export const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
`
export const Wrapper = styled.div`
  display: inline-flex;
  list-style: none;
  height: 120px;
  width: 100%;
  padding-top: 40px;
  font-family: "Poppins", sans-serif;
  justify-content: center;
`;

export const Icon = styled.div`
  position: relative;
  background: #fff;
  border-radius: 50%;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  &:hover span,
  &:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #fff;
  color: #fff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;

// Estilos para ícono de Facebook
export const GitHub = styled(Icon)`
  color: #000;
  &:hover,
  &:hover .tooltip,
  &:hover .tooltip::before {
    background: #000;
    color: #fff;
  }
`;

// Estilos para ícono de Twitter
export const Twitter = styled(Icon)`
  color: #000;
  &:hover,
  &:hover .tooltip,
  &:hover .tooltip::before {
    background: #1DA1F2;
    color: #fff;
  }
`;

// Estilos para ícono de Instagram
export const Instagram = styled(Icon)`
  color: #000;
  &:hover,
  &:hover .tooltip,
  &:hover .tooltip::before {
    background: #E4405F;
    color: #fff;
  }
`;

export const Discord = styled(Icon)`
  color: #000;
  &:hover,
  &:hover .tooltip,
  &:hover .tooltip::before {
    background: #5869e9;
    color: #fff;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props)=> props.color ? '#0fe' : ''};
  text-shadow: ${(props)=> props.shadow ? '0 0 6px #00fff1' : ''};
`
import styled from 'styled-components'

export const Button = styled.a`
  & {
  width: 200px;
  height: 80px;
  padding: 2em 12em;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 4px;
  color: transparent;
  border: 3px solid #fff;
  font-size: 14px;
  position: relative;
  font-family: inherit;
  background: transparent;
  cursor: pointer;
  border-radius: 10px;

  @media (max-width: 320px) {
    padding: 2em 10em;
  }
}

&::before {
 content: ${(props) => props.name};
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(225,117,252, 0.5);
 color: #fff;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: all 0.5s;
 border-radius: 10px;
}

&:hover::before {
 left: 100%;
 transform: scale(0) rotateY(360deg);
 opacity: 0;
}

&::after {
  content: ${(props) => props.name};
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(225,117,252, 0.5);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  transform: scale(0) rotateY(0deg);
  opacity: 0;
  border-radius: 10px;
}

&:hover::after {
 left: 0;
 transform: scale(1) rotateY(360deg);
 opacity: 1;
}

`
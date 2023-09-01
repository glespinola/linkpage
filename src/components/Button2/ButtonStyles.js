import styled from 'styled-components'

export const ContainerButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "bt-1 bt-2 bt-3"
    "bt-4 bt-5 bt-6";
  position: relative;
  perspective: 800;
  padding: 0;
  width: 135px;
  height: 47px;
  transition: all 0.3s ease-in-out;

  &:active {
  transform: scale(0.95);
  }

`
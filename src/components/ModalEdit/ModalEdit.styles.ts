import { styled } from "styled-components";

export const Container = styled.div``

export const CloseContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0px;
  margin: 3px;
  top: 0;
  width: 40px;
  height: 40px;
  background-color: black;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover > svg{
    color: red;
  }

  svg {
    color: grey;
  }
`

export const ModalFade = styled.div`
  height: 100%;
  position: absolute;
  background-color: #000;
  opacity: 0.3;
`

export const ModalContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    max-width: 600px;
    margin: 0  auto;
    z-index: 1;
    padding: 8px ;
    background-color: #FFF;
    color: black;
    justify-content: center;

    h2 {
      text-align: center;
      margin-bottom: 0px;
    }

`
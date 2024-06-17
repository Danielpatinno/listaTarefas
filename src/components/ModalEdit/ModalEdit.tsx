import { 
  Container, 
  ModalContainer, 
  ModalFade,
  CloseContainer
} from "./ModalEdit.styles";

import { IoMdClose } from "react-icons/io"

interface ModalEditPrios {
  children: React.ReactNode
  closeModal: () => void
}

export function ModalEdit({children, closeModal}:ModalEditPrios) {

  return (
    <Container>
      <ModalFade onClick={closeModal}/>
      <ModalContainer>
        <h2>Editar Tarefa</h2>
        <CloseContainer>
          <IoMdClose size={45} onClick={closeModal}/>
        </CloseContainer>
        {children}
      </ModalContainer>
    </Container>
  )
}

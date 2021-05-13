import React from 'react'
import { IModal } from './modal'
import { Background, Container } from './style'

const Modal: React.FC<IModal> = (props) => {
  const onClick = (event) => {
    // event.preventDefault();
    if(event.target === event.currentTarget) {
      console.log(event.currentTarget);
      props.onClickBackground()
    }
  }

  return props?.open ? (
    <Background onClick={(e) => props.onClickBackground && onClick(e) }>
      <Container top={props?.top} color={props?.containerColor}>
        { props?.children }
      </Container>
    </Background>
  ) : null
}

export default Modal

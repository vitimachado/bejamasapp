import React from 'react'
import { IButton } from './button'
import { Button } from './style'

const AppButton: React.FC<IButton> = (props) => {
  return (
    <Button
      color={ props?.color }
      onClick={() => props.onClick && props.onClick() }
      disabled={ props?.disabled }
      aria-label={ props?.ariaLabel }>
        { props.children }
    </Button>
  )
}

export default AppButton

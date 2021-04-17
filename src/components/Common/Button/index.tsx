import React from 'react'

import { BotaoComp } from 'types/api'

interface ButtonData {
  button: BotaoComp
  className?: string
}

export default function Button({ button, className = 'btn-red' }: ButtonData) {
  if (button) {
    const { label, link, linkExterno, primario, secundario } = button

    let buttonType = className
    if (primario) {
      buttonType = 'btn-red'
    } else if (secundario) {
      buttonType = 'btn-white'
    }
    if (className !== 'btn-red') {
      buttonType = className
    }

    return (
      <a
        href={link}
        target={linkExterno ? '_target' : '_self'}
        className={`${buttonType} small scrool`}
      >
        {label}
      </a>
    )
  } else {
    return <></>
  }
}

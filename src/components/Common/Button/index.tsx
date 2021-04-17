import React from 'react'

import { BotaoComp } from 'types/api'

export default function Button(props: BotaoComp) {
  if (props) {
    const { label, link, linkExterno, primario, secundario } = props
    return (
      <a
        href={link}
        target={linkExterno ? '_target' : '_self'}
        className="btn-red small scrool"
      >
        {label}
      </a>
    )
  } else {
    return <></>
  }
}

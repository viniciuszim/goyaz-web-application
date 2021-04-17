import React from 'react'

import { ListaTextoComp } from 'types/api'

interface TextListData {
  items: [ListaTextoComp]
}

export default function TextList({ items }: TextListData) {
  if (items) {
    return (
      <ul className="benefits">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <i className="fas fa-check"></i> {item.label}
            </li>
          )
        })}
      </ul>
    )
  } else {
    return <></>
  }
}

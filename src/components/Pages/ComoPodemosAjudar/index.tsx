import { ComoPodemosAjudarPageProps } from 'types/api'

import Button from 'components/Common/Button'
import Image from 'components/Common/Image'
import TextList from 'components/Common/TextList'

export default function ComoPodemosAjudar(props: ComoPodemosAjudarPageProps) {
  const { imagem, titulo, descricao, TextList: items, botao, ativo } = props

  if (!ativo) {
    return <></>
  }
  return (
    <>
      {/* begin section-white */}
      <section className="section-white">
        {/* begin container*/}
        <div className="container">
          {/* begin row*/}
          <div className="row align-items-center">
            {/* begin col-md-6*/}
            <div
              className="col-md-6 wow slideInLeft"
              data-wow-delay="0.25s"
              // style="visibility: visible; animation-delay: 0.25s; animation-name: slideInLeft;"
            >
              <div className="margin-right-15">
                <Image imagem={imagem} alt="pic" />
              </div>
            </div>
            {/* end col-sm-6*/}

            {/* begin col-md-6*/}
            <div className="col-md-6">
              <h3>{titulo}</h3>

              <p>{descricao}</p>

              <TextList items={items} />

              <Button {...botao} />
            </div>
            {/* end col-md-6*/}
          </div>
          {/* end row*/}
        </div>
        {/* end container*/}
      </section>
      {/* end section-white*/}
    </>
  )
}

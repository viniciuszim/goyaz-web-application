import { PrecoPageProps } from 'types/api'

import Button from 'components/Common/Button'

export default function Preco(props: PrecoPageProps) {
  const { titulo, descricao, itens, ativo } = props

  if (!ativo) {
    return <></>
  }
  return (
    <>
      {/* begin pricing section */}
      <section className="section-grey" id="pricing">
        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row align-items-center">
            {/* begin col-md-4 */}
            <div className="col-md-4 col-sm-12">
              <h3>{titulo}</h3>

              <p>{descricao}</p>
            </div>
            {/* end col-md-4 */}

            {itens &&
              itens.map((item, index) => {
                const {
                  destaque,
                  tipo,
                  moeda,
                  valor,
                  frequencia,
                  botao,
                  itens: itens2,
                  ativo
                } = item

                if (!ativo) {
                  return <></>
                }

                return (
                  <div
                    key={index}
                    className="col-md-4 col-sm-6 wow bounceIn"
                    data-wow-delay={`${destaque ? '0.75s' : '0.15s'}`}
                    // style="visibility: visible; animation-delay: 0.25s; animation-name: bounceIn;"
                  >
                    <div
                      className={`${
                        destaque ? 'price-box-grey' : 'price-box-white'
                      }`}
                    >
                      <ul className="pricing-list">
                        <li className="price-title">{tipo}</li>

                        <li className="price-value">{`${moeda}${valor}`}</li>

                        <li className="price-subtitle">{frequencia}</li>

                        <li className="price-tag">
                          <Button button={botao} />
                        </li>

                        {itens2 &&
                          itens2.map((item2, index2) => {
                            return (
                              <li key={index2} className="price-text">
                                {item2.label}
                              </li>
                            )
                          })}
                      </ul>
                    </div>
                  </div>
                )
              })}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end pricing section */}
    </>
  )
}

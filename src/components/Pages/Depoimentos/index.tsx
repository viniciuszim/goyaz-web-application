import { DepoimentosPageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import Stars from 'components/Common/Stars'

export default function Depoimentos(props: DepoimentosPageProps) {
  const { titulo, descricao, avaliacoes, depoimentos, ativo } = props

  if (!ativo) {
    return <></>
  }
  return (
    <>
      {/* begin testimonials section */}
      <section className="section-grey" id="testimonials">
        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row align-items-center">
            {/* begin col-md-5 */}
            <div className="col-md-5 col-sm-12">
              <h2>{titulo}</h2>

              <p>{descricao}</p>

              {avaliacoes && (
                <div className="row">
                  {avaliacoes.map((item, index) => {
                    const { titulo, valor } = item
                    return (
                      <div key={index} className="col-md-4 col-sm-6">
                        {/* begin testim-platform*/}
                        <div
                          className={`testim-platform ${
                            index === 0 ? 'first' : ''
                          }`}
                        >
                          <p>{titulo}</p>

                          <div className="testim-rating">{Stars(valor)}</div>
                        </div>
                        {/* end testim-platform*/}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
            {/* end col-md-5 */}

            {/* begin col-md-1 */}
            <div className="col-md-1"></div>
            {/* end col-md-1 */}

            {/* begin col-md-6*/}
            <div className="col-md-6">
              {depoimentos && (
                <div className="accordion" id="accordionFAQ">
                  {depoimentos.map((item, index) => {
                    const { imagem, nome, cargo, descricao, ativo } = item
                    if (!ativo) {
                      return <></>
                    }
                    return (
                      <div key={index} className="card">
                        <div
                          id={`collapse${index}`}
                          className={`collapse ${index === 0 ? 'show' : ''}`}
                          aria-labelledby="headingOne"
                          data-parent="#accordionFAQ"
                        >
                          <div className="card-body">{descricao}</div>
                        </div>

                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="collapse"
                              data-target={`#collapse${index}`}
                              aria-expanded="true"
                              aria-controls={`collapse${index}`}
                            >
                              <img
                                src={getImageUrl(imagem.image.url)}
                                alt={imagem.image.caption}
                                className="testim-img"
                              />
                              <p className="testim-name">
                                {nome} / <span>{cargo}</span>
                              </p>
                            </button>
                          </h5>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
            {/* end col-md-6*/}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end testimonials section */}
    </>
  )
}

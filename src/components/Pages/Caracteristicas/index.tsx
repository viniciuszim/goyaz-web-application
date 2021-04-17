import { CaracteristicasPageProps } from 'types/api'

export default function Caracteristicas(props: CaracteristicasPageProps) {
  const { titulo, descricao, itens, ativo } = props

  if (!ativo) {
    return <></>
  }
  return (
    <>
      {/* begin features section */}
      <section className="section-white" id="features">
        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row">
            {/* begin col-md-12*/}
            <div className="col-md-12 text-center padding-bottom-10">
              <h2 className="section-title">{titulo}</h2>

              <p className="section-subtitle">{descricao}</p>
            </div>
            {/* end col-md-12 */}
          </div>
          {/* end row */}

          {/* begin row */}
          <div className="row">
            {itens &&
              itens.map((item, index) => {
                const { icone, titulo, descricao, cor } = item
                return (
                  <div key={index} className="col-md-4">
                    <div
                      className={`feature-box ${cor} wow fadeIn`}
                      data-wow-delay="0.25s"
                      // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;"
                    >
                      <i className={`${icone}`}></i>

                      <div className="feature-box-text">
                        <h4>{titulo}</h4>

                        <p>{descricao}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end features section */}
    </>
  )
}

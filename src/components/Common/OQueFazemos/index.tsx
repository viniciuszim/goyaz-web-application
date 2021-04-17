import { OQueFazemosPageProps } from 'types/api'

export default function OQueFazemos(props: OQueFazemosPageProps) {
  const { titulo, descricao, lista, ativo } = props

  if (!ativo) {
    return <></>
  }
  return (
    <>
      {/* begin section-grey */}
      <section className="section-grey" id="about">
        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row">
            {/* begin col-md-12 */}
            <div className="col-md-12 text-center margin-bottom-10">
              <h2 className="section-title">{titulo}</h2>

              <p className="section-subtitle">{descricao}</p>
            </div>
            {/* end col-md-12 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}

        {/* begin services-wrapper */}
        <div className="services-wrapper">
          {/* begin container */}
          <div className="container">
            {/* begin row */}
            <div className="row">
              {lista &&
                lista.map((item, index) => {
                  const { icone, titulo, descricao, cor } = item
                  return (
                    <div key={index} className="col-md-4">
                      <div className={`main-services ${cor}`}>
                        <i className={`${icone}`}></i>

                        <h4>{titulo}</h4>

                        <p>{descricao}</p>
                      </div>
                    </div>
                  )
                })}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end services-wrapper */}
      </section>
      {/* end section-grey */}
    </>
  )
}

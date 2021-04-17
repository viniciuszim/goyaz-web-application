import { PerguntasFrequentesPageProps } from 'types/api'

export default function PerguntasFrequentes(
  props: PerguntasFrequentesPageProps
) {
  const { titulo, descricao, itens, ativo } = props

  if (!ativo) {
    return <></>
  }
  return (
    <>
      {' '}
      {/* begin faq section */}
      <section className="section-white" id="faq">
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
                const { pergunta, resposta, ativo } = item

                if (!ativo) {
                  return <></>
                }

                return (
                  <div key={index} className="faq-box" style={{ width: '50%' }}>
                    <h5>{pergunta}</h5>

                    <p>{resposta}</p>
                  </div>
                )
              })}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end faq section */}
    </>
  )
}

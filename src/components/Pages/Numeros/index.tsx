import { NumerosPageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

export default function Numeros(props: NumerosPageProps) {
  const { background, titulo, itens, ativo } = props

  if (!ativo) {
    return <></>
  }
  return (
    <>
      {/* begin section-bg-1 */}
      <section
        className="section-bg-1"
        style={{
          background: `url(${getImageUrl(background.image.url)})`,
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
        }}
      >
        <div className="section-bg-overlay"></div>

        {/* begin container*/}
        <div className="container">
          {/* begin row*/}
          <div className="row">
            {/* begin col md 7 */}
            <div className="col-md-7 mx-auto margin-bottom-20 text-center">
              <h2 className="white-text">{titulo}</h2>
            </div>
            {/* end col md 7*/}
          </div>
          {/* end row*/}

          {/* begin row*/}
          <div className="row">
            {itens &&
              itens.map((item, index) => {
                const { icone, titulo, descricao } = item
                return (
                  <div
                    key={index}
                    className={`col-md-2 ${
                      index === 0 ? 'offset-md-2' : ''
                    } fun-facts-box text-center`}
                  >
                    <i className={icone}></i>

                    <p className="fun-facts-title">
                      <span className="facts-numbers">{titulo}</span>
                      <br />
                      {descricao}
                    </p>
                  </div>
                )
              })}
          </div>
          {/* end row*/}
        </div>
        {/* end container*/}
      </section>
      {/* end section-bg-1 */}
    </>
  )
}

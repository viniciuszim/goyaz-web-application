import { Banner3PageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import Button from 'components/Common/Button'

export default function Banner3(props: Banner3PageProps) {
  const { background, titulo, descricao, botoes, ativo } = props

  if (!ativo) {
    return <></>
  }
  return (
    <>
      {/* begin section-bg-2 */}
      <section
        className="section-bg-2"
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
            <div className="col-md-7 mx-auto text-center">
              <h2 className="white-text">{titulo}</h2>

              <p className="white-text">{descricao}</p>

              {botoes &&
                botoes.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      button={item}
                      className={index === 0 ? 'btn-white' : 'btn-white-border'}
                    />
                  )
                })}
            </div>
            {/* end col md 7*/}
          </div>
          {/* end row*/}
        </div>
        {/* end container*/}
      </section>
      {/* end section-bg-2 */}
    </>
  )
}

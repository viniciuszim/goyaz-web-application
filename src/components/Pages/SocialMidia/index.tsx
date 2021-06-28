import { isTypeExtensionNode } from 'graphql'
import { SocialMidiaPageProps } from 'types/api'

export default function SocialMidia(props: SocialMidiaPageProps) {
  const { itens, ativo } = props

  if (!ativo) {
    return <></>
  }
  return (
    <>
      {/* begin footer */}
      <div className="footer">
        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row">
            {/* begin col-md-5 */}
            <div className="col-md-5">
              <div className="row">
                <div
                  className="col-xs-12 col-sm-6"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 0
                  }}
                >
                  <p>
                    <i className="fa fa-phone"></i> Assistência 24h
                  </p>
                  <p style={{ paddingLeft: 22 }}>0800 605 0088</p>
                </div>
                <div className="col-xs-12 col-sm-6" style={{ padding: 0 }}>
                  <a href="#boleto" className="btn-red small scrool">
                    2ª Via de Boleto
                  </a>
                </div>
                <div className="col-xs-12" style={{ padding: 0 }}>
                  <p style={{ marginTop: 30 }}>
                    © 2020 Desenvolvido por{' '}
                    <a
                      href="https://www.flynowsolucoes.com.br"
                      target="_blank"
                      rel="noreferrer"
                    >
                      FlyNow Soluções
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* end col-md-5 */}

            {/* begin col-md-2 */}
            <div className="col-md-2"></div>
            {/* end col-md-2 */}

            {/* begin col-md-5 */}
            <div className="col-md-5">
              {/* begin footer_social */}
              <ul className="footer_social">
                <li>Siga nos:</li>

                {itens &&
                  itens.map((item, index) => {
                    const { icone, link } = item
                    return (
                      <li key={index}>
                        <a href={link} target="_blank" rel="noreferrer">
                          <i className={icone}></i>
                        </a>
                      </li>
                    )
                  })}
              </ul>
              {/* end footer_social */}
            </div>
            {/* end col-md-5 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* end footer */}
    </>
  )
}

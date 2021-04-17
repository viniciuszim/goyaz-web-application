import { Banner2PageProps } from 'types/api'

import Image from 'components/Common/Image'

export default function Banner2(props: Banner2PageProps) {
  const { imagens, icones, ativo } = props

  if (!ativo) {
    return <></>
  }
  return (
    <>
      {/* begin section-grey */}
      <section className="section-grey">
        {/* begin container*/}
        <div className="container">
          {/* begin row*/}
          <div className="row align-items-center">
            {/* begin col-md-6*/}
            <div className="col-md-6">
              <div
                className="nav flex-column nav-pills margin-right-25"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {icones &&
                  icones.map((item, index) => {
                    const { icone, titulo, descricao, cor } = item
                    return (
                      <a
                        key={index}
                        className={`nav-link ${index === 0 ? 'active' : ''}`}
                        id={`v-pills-${index}-tab`}
                        data-toggle="pill"
                        href={`#v-pills-${index}`}
                        role="tab"
                        aria-controls={`v-pills-${index}`}
                        aria-selected="true"
                      >
                        <div className="features-second">
                          <div className={`dropcaps-circle ${cor}`}>
                            <i className={icone}></i>
                          </div>

                          <h4 className="margin-bottom-5">{titulo}</h4>

                          <p>{descricao}</p>
                        </div>
                      </a>
                    )
                  })}
              </div>
            </div>
            {/* end col-md-6*/}

            {/* begin col-md-6 */}
            <div className="col-md-6">
              <div
                className="tab-content margin-left-20"
                id="v-pills-tabContent"
              >
                {imagens &&
                  imagens.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`tab-pane fade show ${
                          index === 0 ? 'active' : ''
                        }`}
                        id={`v-pills-${index}`}
                        role="tabpanel"
                        aria-labelledby={`v-pills-${index}-tab`}
                      >
                        <Image imagem={item} alt="pic" />
                      </div>
                    )
                  })}
              </div>
            </div>
            {/* end col-md-6 */}
          </div>
          {/* end row*/}
        </div>
        {/* end container*/}
      </section>
      {/* end section-grey*/}
    </>
  )
}

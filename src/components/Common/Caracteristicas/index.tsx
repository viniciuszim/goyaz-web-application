import { CaracteristicasPageProps } from 'types/api'

export default function Caracteristicas(props: CaracteristicasPageProps) {
  const { ativo } = props

  if (!ativo) {
    return false
  }
  // console.log(props)
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
              <h2 className="section-title">Amazing Features</h2>

              <p className="section-subtitle">
                Quis autem velis ets reprehender net etid quiste voluptate.
              </p>
            </div>
            {/* end col-md-12 */}
          </div>
          {/* end row */}

          {/* begin row */}
          <div className="row">
            {/* begin col-md-4*/}
            <div className="col-md-4">
              <div
                className="feature-box light-green wow fadeIn"
                data-wow-delay="0.25s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;"
              >
                <i className="fas fa-tools"></i>

                <div className="feature-box-text">
                  <h4>Support 24/7</h4>

                  <p>
                    Utise wisi enim minim veniam, quis tation ullamcorper
                    suscipit et loboti nisl consequat nihis.
                  </p>
                </div>
              </div>
            </div>
            {/* end col-md-4 */}

            {/* begin col-md-4*/}
            <div className="col-md-4">
              <div
                className="feature-box light-blue wow fadeIn"
                data-wow-delay="0.5s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;"
              >
                <i className="fas fa-users"></i>

                <div className="feature-box-text">
                  <h4>User Friendly</h4>

                  <p>
                    Utise wisi enim minim veniam, quis tation ullamcorper
                    suscipit et loboti nisl consequat nihis.
                  </p>
                </div>
              </div>
            </div>
            {/* end col-md-4 */}

            {/* begin col-md 4*/}
            <div className="col-md-4">
              <div
                className="feature-box orange wow fadeIn"
                data-wow-delay="0.75s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;"
              >
                <i className="far fa-bell"></i>

                <div className="feature-box-text">
                  <h4>Notifications</h4>

                  <p>
                    Utise wisi enim minim veniam, quis tation ullamcorper
                    suscipit et loboti nisl consequat nihis.
                  </p>
                </div>
              </div>
            </div>
            {/* end col-md-4 */}
          </div>
          {/* end row */}

          {/* begin row */}
          <div className="row">
            {/* begin col-md-4*/}
            <div className="col-md-4">
              <div
                className="feature-box dark-blue wow fadeIn"
                data-wow-delay="1s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;"
              >
                <i className="fas fa-gift"></i>

                <div className="feature-box-text">
                  <h4>Accesibility</h4>

                  <p>
                    Utise wisi enim minim veniam, quis tation ullamcorper
                    suscipit et loboti nisl consequat nihis.
                  </p>
                </div>
              </div>
            </div>
            {/* end col-md-4 */}

            {/* begin col-md-4*/}
            <div className="col-md-4">
              <div
                className="feature-box light-red wow fadeIn"
                data-wow-delay="1.25s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;"
              >
                <i className="fas fa-piggy-bank"></i>

                <div className="feature-box-text">
                  <h4>Cost Control</h4>

                  <p>
                    Utise wisi enim minim veniam, quis tation ullamcorper
                    suscipit et loboti nisl consequat nihis.
                  </p>
                </div>
              </div>
            </div>
            {/* end col-md-4 */}

            {/* begin col-md-4*/}
            <div className="col-md-4">
              <div
                className="feature-box dark-green wow fadeIn"
                data-wow-delay="1.5s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;"
              >
                <i className="far fa-comments"></i>

                <div className="feature-box-text">
                  <h4>Chat With Friends</h4>

                  <p>
                    Utise wisi enim minim veniam, quis tation ullamcorper
                    suscipit et loboti nisl consequat nihis.
                  </p>
                </div>
              </div>
            </div>
            {/* end col-md-4 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end features section */}
    </>
  )
}
